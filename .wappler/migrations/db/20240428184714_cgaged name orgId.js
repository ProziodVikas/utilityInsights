
exports.up = function(knex) {
  return knex.schema
    .table('site', async function (table) {
      table.renameColumn('orgId', 'orgRef');
    })
    .table('siteGroup', async function (table) {
      table.renameColumn('orgId', 'orgRefSG');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('siteGroup', async function (table) {
      table.renameColumn('orgRefSG', 'orgId');
    })
    .table('site', async function (table) {
      table.renameColumn('orgRef', 'orgId');
    })
};
