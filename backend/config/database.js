require('dotenv').config();

const config = {
  development: {
    username: 'root',
    password: process.env.DB_USER_PASSWORD,
    database: 'fibonacci-stories-development',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'CLEARDB_DATABASE_URL',
  },
};

module.exports = config;
