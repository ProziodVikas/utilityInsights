
exports.up = function(knex) {
  return knex.schema
    .raw(knex.client.constructor.name.startsWith('Client_PG') ? 'CREATE EXTENSION IF NOT EXISTS "uuid-ossp"' : 'SELECT 1')
    .createTable('org2', async function (table) {
      table.uuid('orgId').primary().defaultTo(knex.client.constructor.name.startsWith('Client_PG') ? knex.raw('uuid_generate_v4()')
              : (knex.client.constructor.name.includes('MSSQL') ? knex.raw('NEWID()')
                : (knex.client.constructor.name.includes('MySQL') ? knex.raw('(UUID())') : null)));
      table.string('orgName', 255);
      table.string('orgDis', 255);
      table.string('orgMedia', 255);
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('org2')
};
