// importing dependencies
const { Model, DataTypes } = require("sequelize");

// importing dev-created dependencies
const sequelize = require("../config/connection");

// options for comments model
const options = {
  sequelize,
  modelName: "comment",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

// comments model schema
const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING(9999),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "user",
      key: "id",
    },
  },
  game_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "game",
      key: "id",
    },
  },
};

class Comment extends Model {}

Comment.init(schema, options);

module.exports = Comment;
