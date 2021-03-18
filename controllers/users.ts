import express from "express";
import { User } from "../models/users";
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");

module.exports.signup = async (request: any, response: any) => {
  bcrypt.hash(
    request.body.password,
    saltRounds,
    async (err: any, hash: string) => {
      try {
        const token = jwt.sign({ username: request.body.username }, "shhhhh");
        console.log(token, "token");
        const user = await User.query().insert({
          username: request.body.username,
          password: hash,
          token: token,
        });
        response.json({ username: user.username, token: user.token });
      } catch (error) {
        response.send(error);
      }
    }
  );
};

module.exports.login = async (request: any, response: any) => {
  const user = await User.query().findOne({ username: request.body.username });
  response.send(user);
};
