exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { username: "user 1", password: "password" },
        { username: "user 2", password: "password" },
        { username: "user 3", password: "password" },
        { username: "user 4", password: "password" },
      ]);
    });
};
