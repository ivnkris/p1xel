// importing dependencies
const moment = require("moment");

// this will log in the console every route accessed
const logger = (req, res, next) => {
  const { method, path } = req;
  console.info(`\n[${method}]-[${path}] at ${moment()}\n`);

  next();
};

module.exports = logger;
