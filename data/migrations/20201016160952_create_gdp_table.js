exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    .createTable('gdp', function (gdp) {
      gdp.increments();
      gdp.integer('bridgeId').references('bridges.id');
      gdp.float('2015');
      gdp.float('2016');
      gdp.float('2017');
      gdp.float('2018');
      gdp.float('2019');
      gdp.float('2020');
      gdp.float('2021');
      gdp.float('2022');
      gdp.float('2023');
      gdp.float('2024');
    });
};

exports.down = async (knex) => {
  return knex.schema.dropTableIfExists('gdp');
};
