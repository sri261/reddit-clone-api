exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("subreddits")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("subreddits").insert([
        {
          subreddit_name: "subreddit one",
          description: "subreddit one description",
          timestamp: "sample",
          user_id: 1,
        },
        {
          subreddit_name: "subreddit two",
          description: "subreddit one description",
          timestamp: "sample",
          user_id: 2,
        },
        {
          subreddit_name: "subreddit three",
          description: "subreddit three description",
          timestamp: "sample",
          user_id: 3,
        },
        {
          subreddit_name: "subreddit four",
          description: "subreddit four description",
          timestamp: "sample",
          user_id: 4,
        },
        {
          subreddit_name: "subreddit five",
          description: "subreddit five description",
          timestamp: "sample",
          user_id: 1,
        },
        {
          subreddit_name: "subreddit six",
          description: "subreddit six description",
          timestamp: "sample",
          user_id: 2,
        },
      ]);
    });
};
