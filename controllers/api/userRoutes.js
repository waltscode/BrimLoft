const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// Route to get all users
// GET http://localhost:3001/api/users
// Tested by KW. Works.
// After testing I put a restriction on this route so that only managers can user it. If you want to duplicate passing test remove withAuth from params and if block from within try block. I think it will work but can't test till user auth is set up with a way to show insomnia I am logged in.  Gave manager status to Tarique (user id 16, first_name: "Tarique", last_name: "Moatar", default_address: "7482 Black Walnut Terrace\nMississauga, ON\nL5N 8B1", username: "TariqueM", password: "password1023", email: "tmoatar114@gmail.com)
router.get('/', withAuth, async (req, res) => {
  try {
    // Additional authorization check based on user role, because we don't want everyone who is logged in to be able to access a list of all site users together with emails and addresses only managers who need to ship the merchandize out. The role is a field in the user Model.
    if (req.user.role !== 'manager') {
      // If the user is not a manager, deny access
      return res.status(403).json({ message: 'Access forbidden' });
    }
    const allUsers = await User.findAll();
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to get a user by ID
// GET http://localhost:3001/api/users/5
// Tested by KW. Works.
// After testing I put a restriction on this route so that only managers can user it. If you want to duplicate passing test remove withAuth from params and if block from within try block. I think it will work but can't test till user auth is set up with a way to show insomnia I am logged in.  Gave manager status to Tarique (user id 16, first_name: "Tarique", last_name: "Moatar", default_address: "7482 Black Walnut Terrace\nMississauga, ON\nL5N 8B1", username: "TariqueM", password: "password1023", email: "tmoatar114@gmail.com) 
router.get('/:id', async (req, res) => {
  try {
    // Additional authorization check based on user role
    if (req.user.role !== 'manager') {
      // If the user is not a manager, deny access
      return res.status(403).json({ message: 'Access forbidden' });
    }

    const userId = req.params.id;
    const userById = await User.findByPk(userId);

    if (!userById) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.status(200).json(userById);
  } catch (err) {
    res.status(500).json(err);
  }
});


//Route for creating a new user (signup).
// POST http://localhost:3001/api/users/signup  Sample req.body: {"first_name": "Celia", "last_name": "Ramsay", "default_address": "303-77 Spruce Place SW, Calgary AB, T3C3X6", "username": "CeliaR", "password": "password1038","email": "cramsay129@gmail.com"}. 
// Tested in Insomnia by KW. Was able to add Celia. Works.
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.error('Error during signup:', err); 
    res.status(400).json({ error: 'An error occurred during user creation' });
  }
});

// Route for User Login. Tested in Insomnia by KW. I had to create code in user-seeds.js to hash the passwords seeded in the database.  Only then does the password entered with the req.body match that which is stored in the database. This also verifies that our bcrypting code for user login is working in homeRoutes.js.  
// POST http://localhost:3001/api/users/login sample req.body {"email": "kwubbenhorst@gmail.com", "password": "password789"}
// Tested by KW. Works.
// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      return res.status(400).json({ message: 'Incorrect username or password, please try again' });
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect username or password, please try again' });
    }

    req.session.user_id = userData.id;
    req.session.logged_in = true;

    req.session.save((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      return res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.error(err);
    return res.status(400).json(err);
  }
});


// User logout route.  http://localhost:3001/api/users/logout . No req.body required.
// Tested by KW.  At first it didn't work. Works now. Issue was because the cookie was not being passed. I had set the cookie secure setting to true in server.js, and it should be changed back to true before deployment, but for testing with Insomnia, which uses http, not https, this is what prevented the cookie being established and remembered. Works fine now with change in server.js to secure: false.

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;
