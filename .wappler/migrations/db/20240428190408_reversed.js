
exports.up = function(knex) {
  return knex.schema
    .table('site', async function (table) {
      table.renameColumn('orgRef', 'orgId');
    })
    .table('siteGroup', async function (table) {
      table.renameColumn('orgRefSG', 'orgId');
    })

};

exports.down = function(knex) {
  return knex.schema
    .table('siteGroup', async function (table) {
      table.renameColumn('orgId', 'orgRefSG');
    })
    .table('site', async function (table) {
      table.renameColumn('orgId', 'orgRef');
    })
};
