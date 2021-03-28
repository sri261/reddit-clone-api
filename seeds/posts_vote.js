exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("posts_vote")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("posts_vote").insert([
        { user_id: 1, post_id: 1, vote: "up" },
        { user_id: 2, post_id: 2, vote: "down" },
        { user_id: 3, post_id: 3, vote: "up" },
        { user_id: 4, post_id: 4, vote: "down" },
      ]);
    });
};
