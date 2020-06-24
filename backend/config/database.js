const config = {
  development: {
    username: 'root',
    password: '19317922585',
    database: 'fibonacci-stories-development',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
  },
};

module.exports = config;
