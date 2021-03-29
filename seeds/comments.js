exports.seed = function (knex) {
  return knex("comments")
    .del()
    .then(function () {
      return knex("comments").insert([
        {
          user_id: 4,
          post_id: 1,
          comment: "test comment 5",
          timestamp: new Date(),
          upvotes: 2,
          downvotes: 2,
        },
        {
          user_id: 3,
          post_id: 2,
          comment: "test comment sample",
          timestamp: new Date(),
          upvotes: 2,
          downvotes: 2,
        },
        {
          user_id: 2,
          post_id: 3,
          comment: "test comment 3",
          timestamp: new Date(),
          upvotes: 2,
          downvotes: 2,
        },
        {
          user_id: 1,
          post_id: 4,
          comment: "test comment two",
          timestamp: new Date(),
          upvotes: 2,
          downvotes: 2,
        },
        {
          user_id: 4,
          post_id: 5,
          comment: "test comment one",
          timestamp: new Date(),
          upvotes: 2,
          downvotes: 2,
        },
      ]);
    });
};
