//posts_vote
exports.up = async function (knex) {
  await knex.schema.createTable("posts_vote", (table) => {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("users");
    table.integer("post_id").references("id").inTable("posts");
    table.string("vote").notNullable();
    table.unique("user_id", "post_id");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("posts_vote");
};
