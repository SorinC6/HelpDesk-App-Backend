exports.up = function(knex, Promise) {
  knex.schema.createTable("ticket", table => {
    table.increments();
    table.string("title", 200).notNullable();
    table.text("description").notNullable();
    table.text("tried");
    table.string("status", 128).notNullable();
    table
      .integer("student_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("helper_id")
      .unsigned()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {};
