// importing required dependencies
require("dotenv").config();
const Sequelize = require("sequelize");

// creating database options
const dbOptions = {
  host: process.env.DB_HOST,
  dialect: "mysql",
  port: process.env.DB_PORT,
  logging: false,
};

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

// connecting to either the JAWSDB database or , if not available, to the local database (so the app can be run locally)
let connection;
if (process.env.JAWSDB_URL) {
  // connection for heroku
  connection = new Sequelize(process.env.JAWSDB_URL);
} else {
  // connection for local development
  connection = new Sequelize(dbName, dbUser, dbPassword, dbOptions);
}

// exporting connection
module.exports = connection;
