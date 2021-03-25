exports.up = async function (knex) {
  await knex.schema.createTable("subreddit_votes", (table) => {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users");
    table.integer("subreddit_id").references("id").inTable("subreddits");
    table.string("vote").notNullable();
    table.unique("user_id", "subreddit_id");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("subreddit_votes");
};
