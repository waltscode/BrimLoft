const router = require('express').Router();
const { User } = require('../../models');

//Route for creating a new user.  Tested in Insomnia by KW.  I created a new user in the database with this (format body as in user-seeds except as json). Full url is http://localhost:3001/api/users/
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route for User Login. Tested in Insomnia by KW. I had to create code in user-seeds.js to hash the passwords seeded in the database.  Only then does the password entered with the req.body match that which is stored in the database. This also verifies that our bcrypting code for user login is working in homeRoutes.js.  I used the url http://localhost:3001/api/users/login and posted {
  //"email": "kwubbenhorst@gmail.com",
  //"password": "password789"
// to test this route.}

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

//User logout route. Tested in Insomnia by KW by entering a post request to full url: http://localhost:3001/api/users/logout . No req.body required.
//Something wrong here. I get a 404. Either session expires me or code that controls the flag for logged in: true or some other piece of user authentication is not working properly 

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
