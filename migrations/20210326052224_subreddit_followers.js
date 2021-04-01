exports.up = async function (knex) {
  await knex.schema.createTable("subreddit_followers", (table) => {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users").index();
    table
      .integer("subreddit_id")
      .references("id")
      .inTable("subreddits")
      .index();
    table.unique(["subreddit_id", "user_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("subreddit_followers");
};
