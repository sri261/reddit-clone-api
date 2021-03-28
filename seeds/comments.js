exports.seed = function (knex) {
  return knex("comments")
    .del()
    .then(function () {
      return knex("comments").insert([
        {
          user_id: 4,
          post_id: 21,
          comment: "test comment 5",
          timestamp: new Date(),
        },
        {
          user_id: 3,
          post_id: 22,
          comment: "test comment sample",
          timestamp: new Date(),
        },
        {
          user_id: 2,
          post_id: 23,
          comment: "test comment 3",
          timestamp: new Date(),
        },
        {
          user_id: 1,
          post_id: 24,
          comment: "test comment two",
          timestamp: new Date(),
        },
        {
          user_id: 4,
          post_id: 25,
          comment: "test comment one",
          timestamp: new Date(),
        },
      ]);
    });
};
