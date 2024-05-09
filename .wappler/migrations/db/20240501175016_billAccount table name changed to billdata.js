
exports.up = function(knex) {
  return knex.schema
    .renameTable('billAccount', 'billdata')

};

exports.down = function(knex) {
  return knex.schema
    .renameTable('billdata', 'billAccount')
};
