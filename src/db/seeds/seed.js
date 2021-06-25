// importing dependencies
require("dotenv").config();
const sequelize = require("../../config/connection");

// importing models
const { User, Game, Rating, Comment, Followers } = require("../../models");

// importing seeds
const users = require("./data/users.json");
const comments = require("./data/comments.json");
const ratings = require("./data/ratings.json");
const games = require("./data/games.json");
const followers = require("./data/followers.json");

// seeding the database
const seed = async () => {
  await sequelize.sync({
    force: true,
  });

  await User.bulkCreate(users);
  console.info("Users have been seeded");

  await Game.bulkCreate(games);
  console.info("Games have been seeded");

  await Comment.bulkCreate(comments);
  console.info("Comments have been seeded");

  await Rating.bulkCreate(ratings);
  console.info("Ratings have been seeded");

  await Followers.bulkCreate(followers);
  console.info("Followers have been seeded");

  process.exit(0);
};

seed();
