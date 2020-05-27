/* eslint-disable global-require */

const config = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
};

module.exports = config;
