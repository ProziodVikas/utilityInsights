
exports.up = function(knex) {
  return knex.schema
    .table('billdata', async function (table) {
      table.jsonb('invoice').alter();
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('billdata', async function (table) {
      table.text('invoice').alter();
    })
};
