const pg = require("pg");

module.exports = {
  client: "pg",
  connection: {
    database: "reddit",
    user: "postgres",
    password: "password",
  },
};
