import 'dotenv/config'
import { Pool } from 'pg'

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL

let pool

export const isPostgresConfigured = () => Boolean(connectionString)

export const getPool = () => {
  if (!connectionString) {
    throw new Error(
      'Missing POSTGRES_URL or DATABASE_URL. Configure your hosted database first.',
    )
  }

  if (!pool) {
    pool = new Pool({
      connectionString,
      ssl: connectionString.includes('localhost')
        ? false
        : { rejectUnauthorized: false },
    })
  }

  return pool
}

export const initializePostgres = async () => {
  const client = await getPool().connect()

  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS quote_requests (
        id SERIAL PRIMARY KEY,
        full_name TEXT NOT NULL,
        business_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        service_type TEXT NOT NULL,
        service_frequency TEXT NOT NULL,
        project_details TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `)
  } finally {
    client.release()
  }
}

export const insertPostgresQuote = async (fields) => {
  const result = await getPool().query(
    `
      INSERT INTO quote_requests (
        full_name,
        business_name,
        email,
        phone,
        service_type,
        service_frequency,
        project_details
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `,
    [
      fields.fullName,
      fields.businessName,
      fields.email,
      fields.phone,
      fields.serviceType,
      fields.serviceFrequency,
      fields.projectDetails,
    ],
  )

  return Number(result.rows[0].id)
}

export const listPostgresQuotes = async () => {
  const result = await getPool().query(`
    SELECT
      id,
      full_name AS "fullName",
      business_name AS "businessName",
      email,
      phone,
      service_type AS "serviceType",
      service_frequency AS "serviceFrequency",
      project_details AS "projectDetails",
      TO_CHAR(created_at AT TIME ZONE 'UTC', 'YYYY-MM-DD HH24:MI:SS') AS "createdAt"
    FROM quote_requests
    ORDER BY id DESC
  `)

  return result.rows
}
