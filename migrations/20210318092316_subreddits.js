exports.up = async function (knex) {
  await knex.schema.createTable("subreddits", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.integer("user_id").references("id").inTable("users").index();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("subreddits");
};
