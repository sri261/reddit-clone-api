exports.up = async function (knex) {
  await knex.schema.createTable("subreddits", (table) => {
    table.increments("id").primary();
    table.string("subreddit_name").notNullable().unique();
    table.string("description").notNullable();
    table.timestamp("timestamp").notNullable();
    table.timestamp("updated_timestamp");
    table.integer("user_id").references("id").inTable("users").index();
    table.string("image_location");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("subreddits");
};
