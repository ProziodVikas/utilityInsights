
exports.up = function(knex) {
  return knex.schema
    .createTable('org', async function (table) {
      table.increments('orgId');
      table.string('orgDis');
      table.string('orgName');
      table.string('orgMedia');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('org')
};
