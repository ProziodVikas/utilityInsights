
exports.up = function(knex) {
  return knex.schema
    .table('org', async function (table) {
      table.text('orgDis').alter();
      table.text('orgName').alter();
      table.text('orgMedia').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('org', async function (table) {
      table.string('orgDis', 255).alter();
      table.string('orgName', 255).alter();
      table.string('orgMedia', 255).alter();
    })
};
