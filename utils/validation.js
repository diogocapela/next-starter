import * as yup from 'yup';
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  // Email
  email: yup
    .string()
    .required('Please enter your email address.')
    .email('Enter a valid email address.')
    .max(40, "Your email can't have more than 40 characters."),
  isValidEmail: email => EMAIL_REGEX.test(String(email).toLowerCase()),

  // Password
  password: yup
    .string()
    .required('Please enter your password.')
    .max(6, 'Your password should be at least 6 characters long.')
    .max(82, "Your password can't have more than 82 characters."),
  isValidPassword: password => !!(password && password.length > 6 && password.length < 255),

  // First Name
  firstName: yup
    .string()
    .required('Please enter your name.')
    .max(40, 'Please enter no more than 40 characters.'),
  isValidFirstName: firstName => !!(firstName && firstName.length > 1 && firstName.length < 24),

  // Last Name
  lastName: yup.string().max(40, 'Please enter no more than 40 characters.'),
  isValidLastName: lastName => !!(lastName && lastName.length > 1 && lastName.length < 24),

  // Username
  username: yup
    .string()
    .required('Please enter a username.')
    .max(40, "A username can't have more than 40 characters."),
  isValidUsername: username => !!(username && username.length > 3 && username.length < 16),

  // Phone
  phone: yup
    .number()
    .min(4, 'Need to have more than 3 digits.')
    .max(16, "Can't have more than 16 digits."),
  isValidPhone: phone => !!(phone && phone.length > 3 && phone.length < 30),

  // Bio
  bio: yup.string().max(240, "A bio can't have more than 240 characters."),
  isValidBio: bio => !!(bio && bio.length < 255),
};
