
exports.up = function(knex) {
  return knex.schema
    .dropTable('org2')

};

exports.down = function(knex) {
  return knex.schema
    .createTable('org2', async function (table) {
      table.string('orgId', 36).primary().unique().defaultTo(null);
      table.string('orgName', 255);
      table.string('orgDis', 255);
      table.string('orgMedia', 255);
    })
};
