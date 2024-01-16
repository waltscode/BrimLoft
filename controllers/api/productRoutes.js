const express = require('express');
const router = express.Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint
// find all products
// be sure to include its associated Category and Tag data

router.get('/', (req, res) => {
    Product.findAll({
        include: [
        {
            model: Category,
            attributes: ['category_name']
        },
        {
            model: Tag,
            attributes: ['tag_name']
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
            model: Tag,
            attributes: ['tag_name']
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
    Product.create(req.body)
    .then(productData => {
        res.json(productData);
    }
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    }
    );
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