
exports.up = function(knex) {
  return knex.schema
    .createTable('site', async function (table) {
      table.increments('siteId');
      table.integer('orgId').unsigned();
      table.foreign('orgId').references('orgId').inTable('org').onUpdate('CASCADE').onDelete('CASCADE');
      table.integer('siteGroupId').unsigned();
      table.foreign('siteGroupId').references('siteGroupId').inTable('siteGroup').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('siteName');
      table.string('siteDis');
      table.datetime('siteStartDate');
      table.datetime('siteEndDate');
      table.integer('area');
      table.string('contactName');
      table.string('contactPhone');
      table.string('contactEmail');
      table.string('street');
      table.string('city');
      table.string('state');
      table.string('country');
      table.integer('postalCode');
      table.string('coord');
      table.string('media');
      table.string('primaryFunction');
      table.string('timeZone');
      table.string('status');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('site')
};
