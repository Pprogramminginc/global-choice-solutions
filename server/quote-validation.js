const sanitizeField = (value) => value.trim().replace(/\s+/g, ' ')

export const validateQuotePayload = (payload) => {
  const fields = {
    fullName: sanitizeField(payload.fullName || ''),
    businessName: sanitizeField(payload.businessName || ''),
    email: sanitizeField(payload.email || '').toLowerCase(),
    phone: sanitizeField(payload.phone || ''),
    serviceType: sanitizeField(payload.serviceType || ''),
    serviceFrequency: sanitizeField(payload.serviceFrequency || ''),
    projectDetails: (payload.projectDetails || '').trim(),
  }

  const errors = {}

  if (fields.fullName.length < 2) {
    errors.fullName = 'Please enter your full name.'
  }

  if (fields.businessName.length < 2) {
    errors.businessName = 'Please enter your business name.'
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (fields.phone.length < 7) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!fields.serviceType) {
    errors.serviceType = 'Please choose a service.'
  }

  if (!fields.serviceFrequency) {
    errors.serviceFrequency = 'Please choose a service frequency.'
  }

  if (fields.projectDetails.length < 20) {
    errors.projectDetails =
      'Please share a few details about your property and cleaning needs.'
  }

  return {
    fields,
    errors,
    isValid: Object.keys(errors).length === 0,
  }
}
