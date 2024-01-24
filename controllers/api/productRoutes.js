const express = require('express');
const router = express.Router();
const { Product, User, Category, Tag, ProductTag, Review, Teams, League } = require('../../models');

// The `/api/products` endpoint
// find all products

// router.get('/', async (req, res) => {
//   // try {
//   //   const productData = await Product.findAll({
//   //     include: [
//   //       {
//   //         model: Category,
//   //         attributes: ['category_name']
//   //       },
//   //       {
//   //         model: Tag,
//   //         through: ProductTag, 
//   //         attributes: ['tag_name'] 
//   //       },
//   //       {
//   //         model: Teams, 
//   //         attributes: ['team_name'] 
//   //       },
//   //       {
//   //         model: League, 
//   //         attributes: ['league_name'] 
//   //       }
//   //     ]
//   //   });



//     res.json(productData);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });


router.get('/', (req, res) => {
  Product.findAll({
      include: [
      {
          model: Tag,
      }
  ]
}).then(leagueData => {
  res.json(leagueData);
}
).catch(err => {
  console.log(err);
  res.status(500).json(err);
});
}
);

// find a single product by its `id`
// be sure to include its associated Category and Tag data

router.get('/:id', (req, res) => {
    Product.findByPk(req.params.id, {
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
                attributes: ['username'] 
              }
            ]
        }
      ]
    }).then(productData => {
        // Render the 'products' template and pass the productData to it
        res.render('products', { productData, body: 'products' });
        console.log(productData.name);
       
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// create new product

router.post('/', (req, res) => {
    Product.create(req.body).then(productData => {
        res.json(productData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    }
);

// update product

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

// delete one product by its `id` value

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