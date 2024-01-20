const router = require('express').Router();
const { Product, League, Teams } = require('../../models');

// The `/api/teams` endpoint

router.get('/', (req, res) => {
    Teams.findAll({
        include: [
        {
            model: League,
        },
        {
            model: Product,
        }
    ]
}).then(teamsData => {
    res.json(teamsData);
}
).catch(err => {
    console.log(err);
    res.status(500).json(err);
});
}
);

// find a single team by its `id`

router.get('/:id', (req, res) => {
    Teams.findByPk(req.params.id, {
        include: [
        {
            model: League,
        },
        {
            model: Product,
        }
    ]
}).then(teamsData => {
    res.json(teamsData);
}
).catch(err => {
    console.log(err);
    res.status(500).json(err);
}
);
}
);

module.exports = router;