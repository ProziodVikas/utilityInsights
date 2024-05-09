
exports.up = function(knex) {
  return knex.schema
    .createTable('billAccount', async function (table) {
      table.increments('id');
      table.integer('orgId').unsigned();
      table.foreign('orgId').references('orgId').inTable('org').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('siteId').unsigned();
      table.foreign('siteId').references('siteId').inTable('site').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('invoiceNumber');
      table.string('invoiceType');
      table.datetime('issueDate');
      table.datetime('dueDate');
      table.datetime('periodFrom');
      table.datetime('periodTo');
      table.integer('openingBalance');
      table.integer('usage');
      table.integer('newChargesIncTax');
      table.integer('newChargesExTax');
      table.integer('newCharges');
      table.integer('totalAmountDue');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('billAccount')
};
