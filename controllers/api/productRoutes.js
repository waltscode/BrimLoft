//John's code
const express = require('express');
const router = express.Router();
const { Product, Category } = require('../../models');

// The `/api/products` endpoint
// find all products
// be sure to include its associated Category and Tag data

router.get('/', (req, res) => {
    Product.findAll({
        include: [
        {
            model: Category,
            attributes: ['category_name', 'quote', 'description']
        },
        {
            model: Product,
            attributes: ['id', 'name', 'description', 'price', 'image1_url', 'num_in_stock', 'rating', 'num_of_reviews', 'is_featured', 'category_id']
        }
        ]
    }).then(productData => {
        res.json(productData);
    }).catch(err => {
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
        {
            model: Category,
            attributes: ['category_name']
        },
        {
            model: Product,
            attributes: ['id', 'name', 'quote', 'description', 'price', 'image1_url', 'image2_url', 'image3_url', 'image4_url', 'image5_url', 'num_in_stock', 'rating', 'num_of_reviews', 'is_featured', 'category_id']
        }
        ]
    }).then(productData => {
        res.json(productData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    }
    );
    }
);

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