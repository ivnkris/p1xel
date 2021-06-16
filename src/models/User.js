const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const sequelize = require("../config/connection");
const hooks = require("../hooks/index");

const options = {
  hooks,
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
    type: DataTypes.STRING,
    allowNull: true,
  },
};

class User extends Model {
  async isPasswordValid(password) {
    const isValid = await bcrypt.compare(password, this.password);
    return isValid;
  }
}

User.init(schema, options);

module.exports = User;
