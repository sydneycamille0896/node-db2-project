/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.createTable('cars', table => {
    table.increments('id').unsigned().primary();
    table.string('vin').notNullable().unique();
    table.string('make').notNullable();
    table.string('model').notNullable();
    table.integer('mileage').notNullable();
    table.string('title');
    table.string('transmission');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = async function (knex) {
  // DO YOUR MAGIC
  await knex.schema.dropTableIfExists('cars');
};
