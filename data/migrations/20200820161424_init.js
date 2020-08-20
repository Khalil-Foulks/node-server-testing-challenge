
exports.up = function(knex) {
  return knex.schema.createTable('animals', tbl =>{
    tbl.increments();
    tbl.string('animals', 128).unique().notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('animals')
};
