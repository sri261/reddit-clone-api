exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "user1",
          password: "password",
          token: "$2b$10$v2DJbD9eF3o5nywKftx8jOLMSCXYezzouI9kxJ.vi1uNuMRJ3Gkdm",
        },
        {
          username: "user2",
          password: "password",
          token: "$2b$10$v2DJbD9eF3o5nywKftx8jOLMSCXYezzouI9kxJ.vi1uNuMRJ3Gkdm",
        },
        {
          username: "user3",
          password: "password",
          token: "$2b$10$v2DJbD9eF3o5nywKftx8jOLMSCXYezzouI9kxJ.vi1uNuMRJ3Gkdm",
        },
        {
          username: "user4",
          password: "password",
          token: "$2b$10$v2DJbD9eF3o5nywKftx8jOLMSCXYezzouI9kxJ.vi1uNuMRJ3Gkdm",
        },
      ]);
    });
};
