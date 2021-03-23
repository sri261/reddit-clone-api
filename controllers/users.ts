import { User } from "../models/users";
import { Request, Response } from "express";

const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

module.exports.signup = async (request: Request, response: Response) => {
  try {
    const hash = await bcrypt.hash(request.body.password, saltRounds);
    const token = await jwt.sign({ username: request.body.username }, "shsh");
    const user = await User.query().insert({
      username: request.body.username,
      password: hash,
      token: token,
    });
    response
      .status(200)
      .json({ id: user.id, username: user.username, token: user.token });
  } catch (error) {
    response.send(error);
  }
};

module.exports.login = async (request: Request, response: Response) => {
  try {
    const user = await User.query().findOne({
      username: request.body.username,
    });
    if (!user) {
      response.status(404).send("username does not exist");
    } else {
      const passwordCheck = await bcrypt.compare(
        request.body.password,
        user.password
      );
      passwordCheck
        ? response.json({
            id: user.id,
            username: user.username,
            token: user.token,
          })
        : response.status(401).send("enter correct password");
    }
  } catch (error) {
    response.send(error);
  }
};
