exports.seed = function (knex) {
  return knex("comments_vote")
    .del()
    .then(function () {
      return knex("comments_vote").insert([
        { user_id: 1, comment_id: 11, vote: "up" },
        { user_id: 2, comment_id: 12, vote: "down" },
        { user_id: 3, comment_id: 13, vote: "up" },
        { user_id: 4, comment_id: 14, vote: "down" },
      ]);
    });
};
