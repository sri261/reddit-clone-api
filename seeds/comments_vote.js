exports.seed = function (knex) {
  return knex("comments_vote")
    .del()
    .then(function () {
      return knex("comments_vote").insert([
        { user_id: 1, comment_id: 1, vote: "up" },
        { user_id: 2, comment_id: 2, vote: "down" },
        { user_id: 3, comment_id: 3, vote: "up" },
        { user_id: 4, comment_id: 4, vote: "down" },
      ]);
    });
};
