exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("posts_vote")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("posts_vote").insert([
        { user_id: 1, post_id: 21, vote: "up" },
        { user_id: 2, post_id: 22, vote: "down" },
        { user_id: 3, post_id: 23, vote: "up" },
      ]);
    });
};
