const express = require('express');
const router = express.Router();
const { Product, User, Category, Tag, ProductTag, Review, Teams, League } = require('../../models');
const withAuth = require('../../utils/auth'); 

// View all products
// GET http://localhost:3001/api/products  Tested by KW  Works.  
router.get('/', (req, res) => {
  Product.findAll({
      include: [
        {
          model: Category,
          attributes: ['category_name']
        },
        {
          model: Tag,
          through: ProductTag, 
          attributes: ['tag_name'] 
        },
        {
          model: Teams, 
          attributes: ['team_name'] 
        },
      ]
    }).then(productData => {
      res.json(productData);
    }
    ).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  }
);


// // view a particular product by its `id`
// //GET http://localhost:3001/api/products/4 (tested by KW. Works.)
// router.get('/:id', (req, res) => {
//   Product.findByPk(req.params.id, {
//       include: [
//       // {
//       //     model: Category,
//       //     attributes: ['category_name']
//       // },
//       // {
//       //     model: Product,
//       //     attributes: ['name']
//       // },
//       {
//           model: Review,
//           include: [
//             {
//               model: User,
//               attributes: ['username'] 
//             }
//           ]
//       }
//     ]
//   }).then(productData => {
//       // Render the 'products' template and pass the productData to it
//       res.render('products', { productData, body: 'products' });
//       console.log(productData.name);
     
//   }).catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//   });
// });


// view a particular product by its `id`
// GET http://localhost:3001/api/products/4 (beta, trying to integrate user auth)
router.get('/:id', withAuth, async (req, res) => {
  try {
    // Find the logged-in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });

    const productData = await Product.findByPk(req.params.id, {
      include: [
        // {
        //     model: Category,
        //     attributes: ['category_name']
        // },
        // {
        //     model: Product,
        //     attributes: ['name']
        // },
        {
          model: Review,
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        },
      ],
    });

    // Render the 'products' template and pass the productData to it
    res.render('products', { productData, body: 'products', ...user });
    console.log(productData.name);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




// Add a new product
//POST http://localhost:3001/api/products req.body: {"name": "Ten Gallon Hat","quote": "The bigger the hat the smaller the property", "description": "Cowboy standard", "price": "19.99", "image1_url": "", "image2_url": "", "image3_url": "", "image4_url": "", "image5_url": "", "num_in_stock": "50", "rating": "4.86", "num_of_reviews": "7", "is_featured": true, "category_id": "2"}. Should consider making this a route restricted to managers
// Tested by KW. Works
router.post('/', (req, res) => {
    Product.create(req.body).then(productData => {
        res.json(productData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    }
);

// Update a particular product
// PUT http://localhost:3001/api/products/36. Submitted req.body {"price": "24.99"} to update price of Ten Gallon hat. Should consider making this route restricted to managers
// Tested by KW. Works
router.put('/:id', (req, res) => {
    Product.update(req.body, {
        where: {
        id: req.params.id
        }
    }).then(productData => {
        res.json(productData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    }
    );
    }
);

// delete a particular product by its `id`
// DELETE http://localhost: 3001/api/products/36 (deleted Ten Gallon Hat). Should consider making this route restricted to managers
// Tested by KW, Works.
router.delete('/:id', (req, res) => {
    Product.destroy({
        where: {
        id: req.params.id
        }
    }).then(productData => {
        res.json(productData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    }
    );
    }
);


module.exports = router;