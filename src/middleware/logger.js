const moment = require("moment");

const logger = (req, res, next) => {
  const { method, path } = req;
  console.log(`\n[${method}]-[${path}] at ${moment()}\n`);

  next();
};

module.exports = logger;
