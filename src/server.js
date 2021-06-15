console.log("this is a server");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const expressSession = require("express-session");
const connectSessionSequelize = require("connect-session-sequelize")(
  expressSession.Store
);

const sequelize = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new connectSessionSequelize({ db: sequelize }),
};

app.use(cors());
app.use(expressSession(sessionOptions));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(routes);

const init = async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(`\nServer running on http://localhost:${PORT}\n`)
    );
  } catch (error) {
    console.log(error);
    console.error("Failed to connect to DB");
  }
};

init();
