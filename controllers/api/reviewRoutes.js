const express = require('express');
const router = express.Router();
const { Review, User, Product } = require('../../models');

// The `/api/reviews` endpoint

router.get('/', (req, res) => {
    // find all reviews
    // be sure to include its associated Products
    Review.findAll({
        include: [
        {
            model: Product,
            attributes: ['name', 'price', 'num_in_stock', 'category_id']
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    }).then(reviewData => {
        res.json(reviewData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    }
);

router.get('/:id', (req, res) => {
    // find one review by its `id` value
    // be sure to include its associated Products
    Review.findByPk(req.params.id, {
        include: [
        {
            model: Product,
            attributes: ['product_name', 'price', 'stock', 'category_id']
        },
        {
            model: User,
            attributes: ['username']
        }
        ]
    }).then(reviewData => {
        res.json(reviewData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    }
    );
    }
);

router.post('/', (req, res) => {
    // create a new review
    Review.create(req.body)
    .then(reviewData => {
        res.json(reviewData);
    }
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
    // update a review by its `id` value
    Review.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(reviewData => {
        if (!reviewData) {
            res.status(404).json({ message: 'No review found with this id' });
            return;
        }
        res.json(reviewData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    // delete a review by its `id` value
    Review.destroy({
        where: {
            id: req.params.id
        }
    }).then(reviewData => {
        if (!reviewData) {
            res.status(404).json({ message: 'No review found with this id' });
            return;
        }
        res.json(reviewData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;