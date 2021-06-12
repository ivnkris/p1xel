const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = require("../config/connection");

const options = {
  sequelize,
  modelName: "user",
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
  steam_id: {
    type: DataTypes.STRING,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profile_picture: {
    type: DataTypes.STRING,
    defaultValue: "insert picture here",
  },
  friends: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  },
};

class User extends Model {}

User.init(schema, options);

module.exports = User;
