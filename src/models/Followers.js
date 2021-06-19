const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

const options = {
  sequelize,
  modelName: "followers",
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
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
  follower_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
};

class Followers extends Model {}

Followers.init(schema, options);

module.exports = Followers;
