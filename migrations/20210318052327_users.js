exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("username").notNullable().unique();
    table.string("password").notNullable();
    table.string("token");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("users");
};
