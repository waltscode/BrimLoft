const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const leagueRoutes = require('./leagueRoutes');
const teamsRoutes = require('./teamsRoutes');
const reviewRoutes = require('./reviewRoutes'); 
const orderRoutes = require('./orderRoutes');
const productTagRoutes = require('./productTagRoutes');
const tagRoutes = require('./tagRoutes');


router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/leagues', leagueRoutes);
router.use('/teams', teamsRoutes);
router.use('/review', reviewRoutes);
router.use('/order', orderRoutes);
router.use('/categories', categoryRoutes);
router.use('/productTag', productTagRoutes);
router.use('/tags', tagRoutes);


module.exports = router;
