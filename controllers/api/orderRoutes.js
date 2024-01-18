//John's code
const express = require('express');
const router = express.Router();
const { Order, Product, User } = require('../../models');
// The `/api/orders` endpoint
router.get('/', (req, res) => {
    // find all orders
    // be sure to include its associated Products
    Order.findAll({
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
    }).then(orderData => {
        res.json(orderData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    }
);
router.get('/:id', (req, res) => {
    // find one order by its `id` value
    // be sure to include its associated Products
    Order.findByPk(req.params.id, {
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
    }).then(orderData => {
        res.json(orderData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    }
);

router.post('/', (req, res) => {Order.create({...req.body, user_id: req.session.user_id})
    .then(orderData => {
        res.json(orderData);
    }
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    }
);
router.put('/:id', (req, res) => {
    // update a order by its `id` value
    Order.update(req.body, {
        where: {
        id: req.params.id
        }
    }).then(orderData => {
        if (!orderData) {
        res.status(404).json({ message: 'No order found with this id' });
        return;
        }
        res.json(orderData);
    }
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    }
);
router.delete('/:id', (req, res) => {
    // delete a order by its `id` value
    Order.destroy({
        where: {
        id: req.params.id
        }
    }).then(orderData => {
        if (!orderData) {
        res.status(404).json({ message: 'No order found with this id' });
        return;
        }
        res.json(orderData);
    }
    ).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    }
);
module.exports = router;