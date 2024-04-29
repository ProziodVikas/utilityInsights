
exports.up = function(knex) {
  return knex.schema
    .createTable('siteGroup', async function (table) {
      table.increments('siteGroupId');
      table.integer('orgId').unsigned();
      table.foreign('orgId').references('orgId').inTable('org').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('siteGroupName');
      table.string('siteGroupDis');
      table.string('siteGroupMedia');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('siteGroup')
};
