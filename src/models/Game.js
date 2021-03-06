const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const options = {
  sequelize,
  modelName: "game",
  timestamps: true,
  underscored: true,
  freezeTableName: true,
};

const schema = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cover_art: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  screenshots: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  critic_rating: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  total_rating: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  is_multiplayer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  release_date: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  has_game: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  want_game: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
};

class Game extends Model {}

Game.init(schema, options);

module.exports = Game;
