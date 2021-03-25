exports.up = async function (knex) {
  await knex.schema.createTable("subredditSubs", (table) => {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users").index();
    table
      .integer("subreddit_id")
      .references("id")
      .inTable("subreddits")
      .index();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("subredditSubs");
};
