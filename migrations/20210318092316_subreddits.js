exports.up = async function (knex) {
  await knex.schema.createTable("subreddits", (table) => {
    table.increments("id").primary();
    table.string("subreddit").notNullable();
    table.integer("creatorId").references("id").inTable("users");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("subreddits");
};
