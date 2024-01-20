const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const leagueRoutes = require('./leagueRoutes');
const teamsRoutes = require('./teamsRoutes');


router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/leagues', leagueRoutes);
router.use('/teams', teamsRoutes);

module.exports = router;
