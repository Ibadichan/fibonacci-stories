const config = {
  development: {
    username: 'root',
    password: process.env.DB_USER_PASSWORD,
    database: 'fibonacci-stories-development',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_USER_PASSWORD,
    database: 'fibonacci-stories-production',
    host: process.env.DATABASE_URL,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};

module.exports = config;
