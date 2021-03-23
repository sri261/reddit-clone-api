exports.up = async function (knex) {
  await knex.schema.createTable("subredditSubs", (table) => {
    table.increments("id").primary();
    table.integer("userId").references("id").inTable("users");
    table.integer("subredditId").references("id").inTable("subreddits");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("subredditSubs");
};
