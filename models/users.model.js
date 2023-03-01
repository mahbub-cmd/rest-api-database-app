const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "anisul islam",
    email: "abcdefg@yahoo.com",
  },
  {
    id: uuidv4(),
    username: "rakibul islam",
    email: "abcdefg@yahoo.com",
  },
];

module.exports = users;
