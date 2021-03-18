import { User } from "../models/users";
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

module.exports.signup = async (request: any, response: any) => {
  try {
    const hash = await bcrypt.hash(request.body.password, saltRounds);
    const token = await jwt.sign({ username: request.body.username }, "shsh");
    const user = await User.query().insert({
      username: request.body.username,
      password: hash,
      token: token,
    });
    response.json({ username: user.username, token: user.token });
  } catch (error) {
    response.send(error);
  }
};

module.exports.login = async (request: any, response: any) => {
  const user = await User.query().findOne({ username: request.body.username });
  response.send(user);
};
