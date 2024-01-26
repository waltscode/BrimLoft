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
const hbs = exphbs.create({ helpers,
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials')
});



const sess = {
  secret: process.env.SESSION_SECRET, // Reference to the SESSION_SECRET value is in the .env file
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false, // This project will eventually be deployed to Heroku which provides an HTTPS URL, I am setting to false during development but should be set to true before deployment. That will ensure that the cookie will only be sent over secure (HTTPS) connections
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

// Define a route for "/authentication"
app.get('/authentication', (req, res) => {
  // Render the "authentication.handlebars" template
  res.render('authentication');
});

app.get('/profile', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  try {
    const userData = await User.findByPk(req.session.user_id, {
      // Include any additional data you want to retrieve (e.g., orders, preferences)
    });

    if (!userData) {
      res.status(404).send('User not found');
      return;
    }

    const user = userData.get({ plain: true });
    res.render('profile', { user });
  } catch (err) {
    console.error('Error fetching user data:', err);
    res.status(500).send('Internal server error');
  }
});

//This crucial line leverages everything in the controllers folder which handles routing and makes the API functional to respond when endpoints are hit
app.use(routes);

// Syncs with the database using sequelize and starts the server. Setting force to false is best for production because it prevents accidental data loss when the server is terminated. 
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`BRIMLOFT IS ONLINE! Now listening on port ${PORT}!`);
  });
});
