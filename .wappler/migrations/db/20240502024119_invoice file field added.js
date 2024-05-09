
exports.up = function(knex) {
  return knex.schema
    .table('billdata', async function (table) {
      table.text('invoice');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('billdata', async function (table) {
      table.dropColumn('invoice');
    })
};
