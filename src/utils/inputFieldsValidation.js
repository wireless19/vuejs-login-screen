export const validateEmail = (value) => {
  if (!value) {
    return 'Email is required'
  }
  // Very common email regex (not too strict)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(value)) {
    return 'Enter a valid email address'
  }

  return ''
}

export const validateNumberOnly = (value, label) => {
  if (!value) {
    return `${label} is required`
  }
  // This regex matches one or more digits (0-9).
  const numberRegex = /^\d+$/

  if (!numberRegex.test(value)) {
    return 'Enter Numbers Only'
  }

  return ''
}

export function requiredFields(v, name) {
  return !v ? `${name} is required` : ''
}
