exports.up = function(knex, Promise) {
  return knex.schema.createTable("categories", table => {
    table.increments();
    table
      .string(name, 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists("categories");
};
