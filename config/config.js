module.exports = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: "express_code_development",
    host: "127.0.0.1",
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: "express_code_test",
    host: "127.0.0.1",
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "root",
    database: "express_code_example",
    host: "127.0.0.1",
    dialect: 'mysql'
  }
};
