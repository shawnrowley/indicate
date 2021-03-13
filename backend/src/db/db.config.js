module.exports = {
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
  },
  development: {
    username: "postgres",
    dialect: "postgres",
    password: "dev12345",
    database: "development",
    host: "localhost",
    logging: console.log,
  },
};
