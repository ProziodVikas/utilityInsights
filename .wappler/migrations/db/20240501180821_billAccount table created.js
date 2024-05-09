
exports.up = function(knex) {
  return knex.schema
    .createTable('billAccount', async function (table) {
      table.increments('id');
      table.integer('orgId').unsigned();
      table.foreign('orgId').references('orgId').inTable('org').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('siteId').unsigned();
      table.foreign('siteId').references('siteId').inTable('site').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('accountNumber');
      table.string('billFrequency');
      table.string('vendor');
      table.string('primaryFunction');
      table.string('status');
      table.date('commissionDate');
      table.date('decommissionDate');
      table.date('installationDate');
      table.string('commissionedBy');
      table.string('unit');
      table.string('tz');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('billAccount')
};
