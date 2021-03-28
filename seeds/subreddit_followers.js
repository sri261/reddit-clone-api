exports.seed = function (knex) {
  return knex("subreddit_followers")
    .del()
    .then(function () {
      return knex("subreddit_followers").insert([
        { user_id: 1, subreddit_id: 9 },
        { user_id: 2, subreddit_id: 10 },
        { user_id: 3, subreddit_id: 11 },
        { user_id: 4, subreddit_id: 12 },
        { user_id: 3, subreddit_id: 13 },
      ]);
    });
};
