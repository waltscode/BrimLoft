const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const helpers = require('./utils/handlebarsHelpers'); // Adjust this path as needed

const app = express();

// Set up Handlebars view engine with custom helpers
app.engine('handlebars', engine({
  helpers: helpers, // Use the imported helpers here
  defaultLayout: 'main', // Specify your default layout
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Import the seed data (make sure the paths are correct)
const categoryData = require('./seeds/category-seeds.js').categoryData;
const productData = require('./seeds/product-seeds.js').productData;
const tagData = require('./seeds/tag-seeds.js').tagData;

const teamData = require('./seeds/teams-seeds.js').teamData;



// Combine all mock data
const mockData = {
  categories: categoryData,
  products: productData,
  orders: orderData,
  tags: tagData,
  leagues: leagueData,
  teams: teamData,
  reviews: reviewData,
  // Add other mock data arrays as necessary
};

// Routes for each template
// Homepage
app.get('/', (req, res) => {
  res.render('homepage', { projects: mockData.products, logged_in: false });
});

// Product details
app.get('/product/:id', (req, res) => {
  const product = mockData.products.find(p => p.id === parseInt(req.params.id, 10));
  res.render('productDetail', { product });
});

// Category list
app.get('/categories', (req, res) => {
  res.render('categoryList', { categories: mockData.categories });
});

// Category detail
app.get('/categories/:id', (req, res) => {
  const category = mockData.categories.find(c => c.id === parseInt(req.params.id));
  const productsInCategory = mockData.products.filter(p => p.category_id === category.id);
  res.render('categoryDetail', { category, products: productsInCategory });
});

// Tag list
app.get('/tags', (req, res) => {
  res.render('tagList', { tags: mockData.tags });
});

// Tag detail
app.get('/tags/:id', (req, res) => {
  const tag = mockData.tags.find(t => t.id === parseInt(req.params.id));
  const productsWithTag = mockData.products.filter(p => p.tags.includes(tag.name));
  res.render('tagDetail', { tag, products: productsWithTag });
});

// League list
app.get('/leagues', (req, res) => {
  res.render('leagueList', { leagues: mockData.leagues });
});

// League detail
app.get('/league/:id', (req, res) => {
  const league = mockData.leagues.find(l => l.id === parseInt(req.params.id));
  const teamsInLeague = mockData.teams.filter(t => t.league_id === league.id);
  res.render('leagueDetail', { league, teams: teamsInLeague });
});

// Team list
app.get('/teams', (req, res) => {
  res.render('teamList', { teams: mockData.teams });
});

// Team detail
app.get('/team/:id', (req, res) => {
  const team = mockData.teams.find(t => t.id === parseInt(req.params.id));
  const productsForTeam = mockData.products.filter(p => p.team_id === team.id);
  res.render('teamDetail', { team, products: productsForTeam });
});

// Order management (admin)
app.get('/admin/orders', (req, res) => {
  res.render('orderManagement', { orders: mockData.orders });
});

// Product management (admin)
app.get('/admin/products', (req, res) => {
  res.render('productManagement', { products: mockData.products });
});

// Other routes such as checkout, login, signup can also be added based on the project's needs

// Start the server
const PORT = process.env
