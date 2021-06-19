const User = require("./User");
const Game = require("./Game");
const Rating = require("./Rating");
const Comment = require("./Comment");
const Followers = require("./Followers");

Game.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Game, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Rating.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Rating, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Game, {
  foreignKey: "game_id",
  onDelete: "CASCADE",
});

Game.hasMany(Comment, {
  foreignKey: "game_id",
  onDelete: "CASCADE",
});

Rating.belongsTo(Game, {
  foreignKey: "game_id",
  onDelete: "CASCADE",
});

Game.hasMany(Rating, {
  foreignKey: "game_id",
  onDelete: "CASCADE",
});

Followers.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Followers, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Followers.belongsTo(User, {
  foreignKey: "follower_id",
  onDelete: "CASCADE",
});

User.hasMany(Followers, {
  foreignKey: "follower_id",
  onDelete: "CASCADE",
}),
  (module.exports = { User, Game, Rating, Comment, Followers });
