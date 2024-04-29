
exports.up = function(knex) {
  return knex.schema
    .table('org', async function (table) {
      table.string('orgDis', 255).alter();
      table.string('orgName', 255).alter();
      table.string('orgMedia', 255).alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('org', async function (table) {
      table.text('orgDis', 255).alter();
      table.text('orgName', 255).alter();
      table.text('orgMedia', 255).alter();
    })
};
