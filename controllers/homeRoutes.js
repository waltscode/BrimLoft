// const router = require('express').Router();
// const { Project, User } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
    
    
//     res.render('homepage', { 
//       projects, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });


//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });

// /* CREATE a new user
// router.post('/', async (req, res) => {
//   try {
//     const newUser = req.body;
//     // hash the password from 'req.body' and save to newUser
//     newUser.password = await bcrypt.hash(req.body.password, 10);
//     // create the newUser with the hashed password and save to DB
//     const userData = await User.create(newUser);
//     res.status(200).json(userData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }); */

// module.exports = router;
const router = require('express').Router();
const withAuth = require('../utils/auth');
const { League, Teams, Category, Product, Tag, Order, OrderItem, Review, User, ProductTag } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Render the 'homepage' view within 'main.handlebars'
    res.render('homepage', {
      body: 'homepage', // 'homepage' is the name of your Handlebars view file
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    // Handle errors, e.g., log them or send an error response
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/leagues/:id', async (req, res) => {
  try {
    const leagueData = await League.findByPk(req.params.id, {
      include: [
        {
          model: Teams,
        },
      ],
    });
    const league = leagueData.get({ plain: true });
    console.log(league);
    res.render('league', {
      // spread operator to pass all properties of leagueData to the template
      ...league,
      // logged_in: req.session.logged_in,
    });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);

router.get('/teams/:id', async (req, res) => {
  try {
    const teamData = await Teams.findByPk(req.params.id, {
      include: [
        {
          model: League,
        },
        {
          model: Product,
          include: [
            {
              model: Category,
            },
            {
              model: Tag,
              through: ProductTag,
            },
          ],
        },
      ],
    });
    const team = teamData.get({ plain: true });
    console.log(team);
    res.render('team', {
      // spread operator to pass all properties of teamData to the template
      ...team,
      // logged_in: req.session.logged_in,
    });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);

// Add this new route for the user profile
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Check if the user is logged in
    if (!req.session.logged_in) {
      // Redirect to the login page if not logged in
      res.redirect('/login');
      return;
    }

    // Find the user by the session user ID, include Orders and Reviews
    const userData = await User.findByPk(req.session.user_id, {
      include: [
        {
          model: Order,
          include: [OrderItem], // Assuming Order has OrderItems
        },
        {
          model: Review,
        },
      ],
    });

    if (!userData) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    // Serialize the data
    const user = userData.get({ plain: true });

    // Render the userProfile template with the user data
    res.render('userProfile', {
      user,
      logged_in: true,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;