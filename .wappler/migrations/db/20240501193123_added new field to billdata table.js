
exports.up = function(knex) {
  return knex.schema
    .table('billdata', async function (table) {
      table.integer('billAccountId').unsigned();
      table.foreign('billAccountId').references('id').inTable('billAccount').onUpdate('CASCADE').onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('billdata', async function (table) {
      table.dropForeign('billAccountId');
      table.dropColumn('billAccountId');
    })
};
