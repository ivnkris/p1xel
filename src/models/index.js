const User = require("./User");
const Game = require("./Game");
const Rating = require("./Rating");
const Comment = require("./Comment");

User.hasMany(Game, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

User.hasMany(Rating, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Game.hasMany(Comment, {
  foreignKey: "game_id",
  onDelete: "CASCADE",
});

Game.hasMany(Rating, {
  foreignKey: "game_id",
  onDelete: "CASCADE",
});

Game.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Rating.belongsTo(User, {
  foreignKey: "user_id",
});

Rating.belongsTo(Game, {
  foreignKey: "game_id",
});

Comment.belongsTo(Game, {
  foreignKey: "game_id",
});

Comment.hasOne(Rating, {
  foreignKey: "rating_id",
  onDelete: "CASCADE",
});

Rating.hasOne(Comment, {
  foreignKey: "comment_id",
  onDelete: "CASCADE",
});

module.exports = { User, Game, Rating, Comment };
