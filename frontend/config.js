const config = {};

config.BACKEND_HOST =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://fibonacci-stories.herokuapp.com';

export default config;
