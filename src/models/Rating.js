const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const options = {
  sequelize,
  modelName: "rating",
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
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
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

class Rating extends Model {}

Rating.init(schema, options);

module.exports = Rating;
