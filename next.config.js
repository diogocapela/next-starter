const path = require('path');
const dotenv = require('dotenv');
const dotenvWebpack = require('dotenv-webpack');

dotenv.config();

module.exports = {
  // Define build directory
  distDir: 'build',

  webpack: config => {
    // Read the .env file
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,
      new dotenvWebpack({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    // Fixes npm packages that depend on the fs module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
};
