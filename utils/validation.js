const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  isValidEmail: (email) => EMAIL_REGEX.test(String(email).toLowerCase()),
  isValidPassword: (password) => !!(password && password.length > 6 && password.length < 255),
  isValidFirstName: (firstName) => !!(firstName && firstName.length > 1 && firstName.length < 24),
  isValidLastName: (lastName) => !!(lastName && lastName.length > 1 && lastName.length < 24),
  isValidUsername: (username) => !!(username && username.length > 3 && username.length < 16),
  isValidPhone: (phone) => !!(phone && phone.length > 3 && phone.length < 30),
  isValidBio: (bio) => !!(bio && bio.length < 255),
};
