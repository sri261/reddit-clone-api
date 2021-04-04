import express from "express";
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.use("/", require("./routes/users"));
app.use("/subreddits", require("./routes/subreddit"));
app.use("/posts", require("./routes/postsRoute"));
app.use("/posts", require("./routes/postVotesRoute"));
app.use("/posts", require("./routes/commentsRoute"));
app.use("/comments", require("./routes/commentsVoteRoute"));

app.use("/subreddit", require("./routes/subredditSubRoute"));

// app.use("/subreddit", require("./routes/subredditVotesRoute"));

app.listen(port, () => {
  console.log(`server is running on Port ${port}`);
});
