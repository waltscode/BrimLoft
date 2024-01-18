/*
 * This file defines the associations between the different models.
 * Each association is established through Sequelize's association methods.
 * models/index.js also plays the role of an aggregator, exporting all the models as a bundle
 * to other application files that need to interact with the database eg. server.js and the controllers/api files.
 */
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const OrderItem = require('./OrderItem');
const Order = require('./Order');
const Review = require('./Review');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const NHLTeam = require('./NHLTeam');

// Define associations
User.hasMany(Order, {
  foreignKey: 'user_id',
});

Order.belongsTo(User, {
  foreignKey: 'user_id',
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Order.hasMany(OrderItem, {
  foreignKey: 'order_id',
});

OrderItem.belongsTo(Order, { //This is a more traditional ecommerce approach where one item is moved into one cart and then to the checkout.  The scenario where items may simultaneously exist in many carts in a temporary state would require a junction table and two associations of belongs to many.  Something to consider implementing when the application is scaled
  foreignKey: 'order_id',
  onDelete: 'CASCADE', //This allows the item to be removed from the order if the order is deleted.
});

OrderItem.belongsTo(Product, {
  foreignKey: 'product_id',
});

Product.hasMany(OrderItem, {
  foreignKey: 'product_id',
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
});

Review.belongsTo(Product, {
  foreignKey: 'product_id',
});

User.hasMany(Review, {
  foreignKey: 'user_id',
});

Product.hasMany(Review, {
  foreignKey: 'product_id',
});

Product.belongsToMany(Tag, { //product_tag is a junction table that will associate product_ids with tag_ids
  through: 'product_tag',
  foreignKey: 'product_id',
});

Tag.belongsToMany(Product, {
  through: 'product_tag',
  foreignKey: 'tag_id',
});

NHLTeam.belongsToMany(Tag, { // NHLTeam can have multiple tags
  through: 'nhl_team_tag',
  foreignKey: 'nhl_team_id',
});

Tag.belongsToMany(NHLTeam, { // Tag can be associated with multiple NHL teams
  through: 'nhl_team_tag',
  foreignKey: 'tag_id',
});

module.exports = { User, Category, Product, OrderItem, Order, Review, Tag, ProductTag, NHLTeam };



