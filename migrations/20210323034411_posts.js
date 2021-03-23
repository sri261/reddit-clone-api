exports.up = async function (knex) {
  await knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.string("post").notNullable();
    table.integer("creatorId").references("id").inTable("users");
    table.integer("subredditId").references("id").inTable("subreddits");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("subreddits");
};
