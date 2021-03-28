exports.seed = function (knex) {
  return knex("subreddit_followers")
    .del()
    .then(function () {
      return knex("subreddit_followers").insert([
        { user_id: 1, subreddit_id: 1 },
        { user_id: 2, subreddit_id: 2 },
        { user_id: 3, subreddit_id: 3 },
        { user_id: 4, subreddit_id: 4 },
        { user_id: 3, subreddit_id: 5 },
      ]);
    });
};
