// importing dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const handlebars = require("express-handlebars");
const expressSession = require("express-session");
const connectSessionSequelize = require("connect-session-sequelize")(
  expressSession.Store
);

// importing dev created dependencies
const sequelize = require("./config/connection");
const routes = require("./routes");
const logger = require("./middleware/logger");
const helpers = require("./utils/helpers");

const PORT = process.env.PORT || 3000;

const app = express();

// options used to create the session
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new connectSessionSequelize({ db: sequelize }),
};

// adding helpers to handlebars
const hbs = handlebars.create({ helpers });

// setting handlebars as the view engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(cors());
app.use(expressSession(sessionOptions));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(logger);
app.use(routes);

// initializing server
const init = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () =>
      console.info(`\nServer running on http://localhost:${PORT}\n`)
    );
  } catch (error) {
    console.info(error);
    console.error("Failed to connect to DB");
  }
};

init();
