const router = require('express').Router();
const { Product, League, Teams } = require('../../models');

// The `/api/leagues` endpoint

router.get('/', (req, res) => {
    League.findAll({
        include: [
        {
            model: Teams,
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

// find a single league by its `id`

router.get('/:id', (req, res) => {
    League.findByPk(req.params.id, {
        include: [
        {
            model: Teams,
        }
    ]
}).then(leagueData => {
    res.json(leagueData);
}
).catch(err => {
    console.log(err);
    res.status(500).json(err);
}
);
}
);

module.exports = router;

