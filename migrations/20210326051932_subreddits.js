exports.up = async function (knex) {
  await knex.schema.createTable("subreddits", (table) => {
    table.increments("id").primary();
    table.string("subreddit_name").notNullable().unique();
    table.string("description").notNullable();
    table.string("timestamp").notNullable();
    table.string("updated_timestamp");
    table.integer("user_id").references("id").inTable("users").index();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("subreddits");
};
