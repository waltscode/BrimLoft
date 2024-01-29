

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
const { League, Teams, Category, Product, Tag, Order, OrderItem, Review, User, ProductTag } = require('../models');
const withAuth = require('../utils/auth');

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

router.get('/categories/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          include: [
            {
              model: Teams,
            },
            {
              model: Tag,
              through: ProductTag,
            },
          ],
        },
      ],
    });
    const category = categoryData.get({ plain: true });
    console.log(category);
    res.render('category', {
      // spread operator to pass all properties of categoryData to the template
      ...category,
      //logged_in: req.session.logged_in,
    });
  }
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
);

// router.get('/api/products/:id', withAuth, async (req, res) => {
//   try {
//     // Find the logged-in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//     });

//     const user = userData.get({ plain: true });

//     // Render the product details page
//     res.render('products', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     console.error('Error in route to view a particular product:', err);
//     res.status(500).json(err);
//   }
// });

// router.get('/api/products/:id', withAuth, async (req, res) => {
//   try {
//     // Find the logged-in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//     });

//     const user = userData.get({ plain: true });

//     // Find the product details based on the provided :id
//     const productId = req.params.id;
//     const productData = await Product.findByPk(productId, {
//       include: [
//           {
//             model: Tag, // Include Tag model
//             through: ProductTag,
//           },
//           {
//             model: Review, // Include Review model
//           },
//       ],
//     });

//     if (!productData) {
//       // Handle case where the product with the given id is not found
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     const product = productData.get({ plain: true });

//     // Render the product details page
//     res.render('products', {
//       ...user,
//       ...product,
//       logged_in: true,
//     });
//   } catch (err) {
//     console.error('Error in route to view a particular product:', err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
