require("dotenv").config();
const sequelize = require("../../config/connection");

const { User, Game, Rating, Comment, Followers } = require("../../models");

const users = require("./data/users.json");
const comments = require("./data/comments.json");
const ratings = require("./data/ratings.json");
const games = require("./data/games.json");
const followers = require("./data/followers.json")

const seed = async () => {
  await sequelize.sync({
    force: true,
  });

  await User.bulkCreate(users);
  console.log("Users have been seeded");

  await Game.bulkCreate(games);
  console.log("Games have been seeded");

  await Comment.bulkCreate(comments);
  console.log("Comments have been seeded");

  await Rating.bulkCreate(ratings);
  console.log("Ratings have been seeded");

  await Followers.bulkCreate(followers);
  console.log("Followers have been seeded")

  process.exit(0);
};

seed();
