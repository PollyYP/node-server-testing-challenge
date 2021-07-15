exports.up = async function (knex) {
  await knex.schema.createTable("cars", (table) => {
    table.increments();
    table.text("model").notNullable();
    table.text("make").notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("make");
  await knex.schema.dropTableIfExists("model");
};
