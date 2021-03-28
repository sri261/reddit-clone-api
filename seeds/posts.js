exports.seed = function (knex) {
  return knex("posts")
    .del()
    .then(function () {
      return knex("posts").insert([
        {
          user_id: 1,
          subreddit_id: 1,
          post_title: "post one",
          post_description: "post number one",
          timestamp: new Date(),
        },
        {
          user_id: 2,
          subreddit_id: 2,
          post_title: "post two",
          post_description: "post number two",
          timestamp: new Date(),
        },
        {
          user_id: 3,
          subreddit_id: 3,
          post_title: "post three",
          post_description: "post number three",
          timestamp: new Date(),
        },
        {
          user_id: 4,
          subreddit_id: 4,
          post_title: "post four",
          post_description: "post number four",
          timestamp: new Date(),
        },
        {
          user_id: 3,
          subreddit_id: 5,
          post_title: "post five",
          post_description: "post number five",
          timestamp: new Date(),
        },
      ]);
    });
};