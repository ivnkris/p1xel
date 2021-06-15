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
    allowNull: false,
  },
  screenshots: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  critic_rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_multiplayer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  release_date: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  has_game: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  want_game: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
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
