const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
// const seedProductTags = require('./product-tag-seeds');
const seedLeagues = require('./league-seeds');
const seedNhl = require('./nhl-seeds');
const seedNfl = require('./nfl-seeds');
const seedNba = require('./nba-seeds');
const seedMlb = require('./mlb-seeds');
const seedUsers = require('./user-seeds.js');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n------ USERS SEEDED _____\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  // await seedProductTags();
  // console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  await seedLeagues();
  console.log('\n----- LEAGUES SEEDED -----\n');

  await seedNhl();
  console.log('\n----- NHL TEAMS SEEDED -----\n');

  await seedNfl();
  console.log('\n----- NFL TEAMS SEEDED -----\n');

  await seedNba();
  console.log('\n----- NBA TEAMS SEEDED -----\n');

  await seedMlb();
  console.log('\n----- MLB TEAMS SEEDED -----\n');

  process.exit(0);
};

seedAll();