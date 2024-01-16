/*
 * This file is the entry point for the entire application. It calls on the various 
 * dependencies to set up the Express server, initializes session configuration, invokes 
 * middleware, uses the routing provided in the controllers folder, connects to the database 
 * with sequelize and starts the server. The session secret and database credentials are stored 
 * in the .env file. The database connection details are specified in the config/connection.js file.
 */
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SESSION_SECRET, // Reference to the SESSION_SECRET value is in the .env file
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: true, // This project will eventually be deployed to Heroku which provides an HTTPS URL, so I am setting this to true. It means that the cookie will only be sent over secure (HTTPS) connections
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js regarding which template engine to use -- handlebars.js
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//This crucial line leverages everything in the controllers folder which handles routing and makes the API functional to respond when endpoints are hit
app.use(routes);

// Syncs with the database using sequelize and starts the server. Setting force to false is best for production because it prevents accidental data loss when the server is terminated. 
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}!`);
  });
});
