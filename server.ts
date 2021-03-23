import express, { request } from "express";

var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.use("/", require("./routes/users"));
app.use("/subreddit", require("./routes/subreddit"));

app.listen(port, () => {
  console.log(`server is running on Port ${port}`);
});
