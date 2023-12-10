// // STRETCH
// /**
//  * @param { import("knex").Knex } knex
//  * @returns { Promise<void> } 
//  */

// exports.seed = async function(knex) {
//     await knex('cars').truncate();
//     await knex('cars').insert([
//         {vin: 'ER000GHFKSLAI002', make: 'GMC', model: 'Terrain', mileage: 60000, title: 'clean', transmission: 'automatic'},
//         {vin: 'ER045345HFKSLAI0', make: 'Honda', model: 'CR-V', mileage: 65000, title: 'clean', transmission: 'automatic'},
//         {vin: 'ER000GHFK5566AI0', make: 'Ford', model: 'Escape', mileage: 25000, title: 'salvage', transmission: 'automatic'},
//     ]);
// };