exports.up = function (knex) {
  return knex.schema.alterTable('bridges', (table) => {
    table.integer('gdpId').references('gdp.id');
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('bridges', (table) => {
    table.dropColumn('gdpId');
  });
};
