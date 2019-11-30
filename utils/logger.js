export default {
  log: (message, ...rest) => {
    console.log(message, ...rest);
  },
  error: (error, ...rest) => {
    console.error(error, ...rest);
  },
};
