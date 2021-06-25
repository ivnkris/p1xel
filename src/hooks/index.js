// importing dependencies
const bcrypt = require("bcrypt");

// hashing password before seeding the database
const beforeBulkCreate = async (users) => {
  const promises = users.map((user) => {
    return bcrypt.hash(user.password, 10);
  });

  const passwords = await Promise.all(promises);

  passwords.forEach((password, index) => {
    users[index].password = password;
  });
};

// hashing user password before interacting with it
const beforeCreate = async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
};

module.exports = {
  beforeBulkCreate,
  beforeCreate,
};
