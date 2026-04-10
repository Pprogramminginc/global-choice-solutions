import { isAuthorizedAdminRequest } from '../server/admin-auth.js'
import { initializePostgres, insertPostgresQuote, listPostgresQuotes } from '../server/postgres.js'
import { validateQuotePayload } from '../server/quote-validation.js'

let initializationPromise

const ensureDatabase = async () => {
  if (!initializationPromise) {
    initializationPromise = initializePostgres()
  }

  await initializationPromise
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    if (!isAuthorizedAdminRequest(req)) {
      res.status(401).json({
        message: 'Admin access requires a valid password.',
      })
      return
    }

    try {
      await ensureDatabase()
      const quotes = await listPostgresQuotes()

      res.status(200).json({ quotes })
      return
    } catch {
      res.status(500).json({
        message: 'We could not load quote requests.',
      })
      return
    }
  }

  if (req.method === 'POST') {
    const payload = req.body || {}
    const { fields, errors, isValid } = validateQuotePayload(payload)

    if (!isValid) {
      res.status(400).json({
        message: 'Please fix the highlighted fields and try again.',
        errors,
      })
      return
    }

    try {
      await ensureDatabase()
      const quoteRequestId = await insertPostgresQuote(fields)

      res.status(201).json({
        message: 'Quote request saved successfully.',
        quoteRequestId,
      })
      return
    } catch {
      res.status(500).json({
        message: 'Something went wrong while saving your quote request.',
      })
      return
    }
  }

  res.setHeader('Allow', 'GET, POST')
  res.status(405).json({ message: 'Method not allowed.' })
}
