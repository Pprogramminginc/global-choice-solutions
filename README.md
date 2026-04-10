# Global Choice Solutions Website

This project now includes:

- A React + Vite marketing site
- A lightweight local Node backend for development
- A Vercel-ready API backed by Postgres for deployment
- An in-site admin page for reviewing quote requests

## Local Development

Run both the frontend and backend together:

```bash
npm run dev
```

Useful scripts:

- `npm run dev:client` starts the Vite frontend on port `5173`
- `npm run dev:server` starts the local SQLite quote API on port `3001`
- `npm run start` runs the backend without file watching

## Quote API

The backend exposes:

- `POST /api/quotes` to save a quote request
- `GET /api/quotes` to read saved quote requests
- `GET /api/health` to verify the API is running

For local development, quote requests are stored in:

- `data/quotes.db`

The database file and table are created automatically the first time the server starts.

## Admin View

To review saved quote requests in the browser, open:

```text
http://localhost:5173/#admin
```

In local development, the admin page can load automatically. In deployed environments, it expects an admin password.

## Vercel Deployment

To make the deployed admin page work on Vercel:

1. Create a hosted Postgres database.
   Vercel Postgres is the simplest fit if you are staying inside Vercel.
2. Add one of these environment variables in your Vercel project:
   - `POSTGRES_URL`
   - `DATABASE_URL`
3. Add an `ADMIN_SECRET` environment variable with a strong password.
4. Redeploy the project.

After deployment, you can access the admin page at:

```text
https://your-domain.com/#admin
```

The admin page will prompt for the password stored in `ADMIN_SECRET`.

## Environment Variables

This repo includes [.env.example](/Users/bxpressure/Desktop/gcs-website/.env.example) as a starting point.

- `ADMIN_SECRET` protects the deployed admin page
- `POSTGRES_URL` or `DATABASE_URL` connects the deployed API to Postgres

For Vercel, set these values in Project Settings instead of committing a real `.env` file.
