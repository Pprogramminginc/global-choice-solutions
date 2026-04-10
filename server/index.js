import 'dotenv/config'
import { mkdirSync } from 'node:fs'
import { createServer } from 'node:http'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DatabaseSync } from 'node:sqlite'
import { isAuthorizedAdminRequest } from './admin-auth.js'
import { validateQuotePayload } from './quote-validation.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dataDirectory = join(__dirname, '..', 'data')
const dbPath = join(dataDirectory, 'quotes.db')
const port = Number(process.env.PORT) || 3001
const defaultAllowedOrigins = new Set([
  'http://localhost:5173',
  'http://127.0.0.1:5173',
])

const readBody = (req) =>
  new Promise((resolve, reject) => {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk

      if (body.length > 1_000_000) {
        reject(new Error('Request body too large'))
        req.destroy()
      }
    })

    req.on('end', () => resolve(body))
    req.on('error', reject)
  })

export const initializeDatabase = (database) => {
  database.exec(`
    CREATE TABLE IF NOT EXISTS quote_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      full_name TEXT NOT NULL,
      business_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      service_type TEXT NOT NULL,
      service_frequency TEXT NOT NULL,
      project_details TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `)

  return {
    getQuotes: database.prepare(`
      SELECT
        id,
        full_name AS fullName,
        business_name AS businessName,
        email,
        phone,
        service_type AS serviceType,
        service_frequency AS serviceFrequency,
        project_details AS projectDetails,
        created_at AS createdAt
      FROM quote_requests
      ORDER BY id DESC
    `),
    insertQuote: database.prepare(`
      INSERT INTO quote_requests (
        full_name,
        business_name,
        email,
        phone,
        service_type,
        service_frequency,
        project_details
      ) VALUES (?, ?, ?, ?, ?, ?, ?)
    `),
  }
}

export const createQuoteServer = ({
  database,
  allowedOrigins = defaultAllowedOrigins,
}) => {
  const { getQuotes, insertQuote } = initializeDatabase(database)

  return createServer(async (req, res) => {
    const origin = req.headers.origin

    const writeJson = (statusCode, payload) => {
      const headers = {
        'Content-Type': 'application/json',
      }

      if (origin && allowedOrigins.has(origin)) {
        headers['Access-Control-Allow-Origin'] = origin
        headers['Vary'] = 'Origin'
      }

      res.writeHead(statusCode, headers)
      res.end(JSON.stringify(payload))
    }

    const writeNoContent = () => {
      const headers = {}

      if (origin && allowedOrigins.has(origin)) {
        headers['Access-Control-Allow-Origin'] = origin
        headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
        headers['Access-Control-Allow-Headers'] = 'Content-Type'
        headers['Vary'] = 'Origin'
      }

      res.writeHead(204, headers)
      res.end()
    }

    if (req.method === 'OPTIONS' && req.url === '/api/quotes') {
      writeNoContent()
      return
    }

    if (req.method === 'GET' && req.url === '/api/health') {
      writeJson(200, { ok: true })
      return
    }

    if (req.method === 'GET' && req.url === '/api/quotes') {
      if (!isAuthorizedAdminRequest(req)) {
        writeJson(401, {
          message: 'Admin access requires a valid password.',
        })
        return
      }

      writeJson(200, {
        quotes: getQuotes.all(),
      })
      return
    }

    if (req.method === 'POST' && req.url === '/api/quotes') {
      try {
        const rawBody = await readBody(req)
        const payload = JSON.parse(rawBody || '{}')
        const { fields, errors, isValid } = validateQuotePayload(payload)

        if (!isValid) {
          writeJson(400, {
            message: 'Please fix the highlighted fields and try again.',
            errors,
          })
          return
        }

        const result = insertQuote.run(
          fields.fullName,
          fields.businessName,
          fields.email,
          fields.phone,
          fields.serviceType,
          fields.serviceFrequency,
          fields.projectDetails,
        )

        writeJson(201, {
          message: 'Quote request saved successfully.',
          quoteRequestId: Number(result.lastInsertRowid),
        })
        return
      } catch (error) {
        const isJsonError = error instanceof SyntaxError
        const statusCode = isJsonError ? 400 : 500

        writeJson(statusCode, {
          message: isJsonError
            ? 'Invalid JSON payload.'
            : 'Something went wrong while saving your quote request.',
        })
        return
      }
    }

    writeJson(404, { message: 'Not found.' })
  })
}

export const createAppDatabase = () => {
  mkdirSync(dataDirectory, { recursive: true })
  return new DatabaseSync(dbPath)
}

if (import.meta.main) {
  const database = createAppDatabase()
  const server = createQuoteServer({ database })

  server.listen(port, () => {
    console.log(`Quote API running at http://localhost:${port}`)
  })
}
