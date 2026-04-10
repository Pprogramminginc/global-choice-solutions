export const getAdminSecret = () => process.env.ADMIN_SECRET || ''

export const isLocalRequest = (req) => {
  const host = req.headers.host || ''
  return host.includes('localhost') || host.includes('127.0.0.1')
}

export const isAuthorizedAdminRequest = (req) => {
  const adminSecret = getAdminSecret()

  if (!adminSecret) {
    return isLocalRequest(req)
  }

  const providedSecret = req.headers['x-admin-secret']

  return typeof providedSecret === 'string' && providedSecret === adminSecret
}
