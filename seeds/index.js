const seedUsers = require('./user-seeds');
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const seedOrders = require('./order-seeds');
const seedOrderItems = require('./orderitem-seeds');
const seedReviews = require('./review-seeds');
const seedLeagues = require('./league-seeds');
const seedTeams = require('./teams-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n------ USERS SEEDED _____\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedLeagues();
  console.log('\n----- LEAGUES SEEDED -----\n');
  await seedTeams();
  console.log('\n----- TEAMS SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');
  await seedOrders();
  console.log('\n------ORDERS SEEDED -------\n');
  await seedOrderItems();
  console.log('\n------ORDERITEMS SEEDED ----\n');
  await seedReviews();
  console.log('\n------REVIEWS SEEDED -----\n');
  
  process.exit(0);
};

seedAll();