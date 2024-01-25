const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const leagueRoutes = require('./leagueRoutes');
const teamsRoutes = require('./teamsRoutes');
const tagRoutes = require('./tagRoutes');
const productTagRoutes = require('./productTagRoutes');
const orderRoutes = require('./orderRoutes');
const orderItemRoutes = require('./orderItemRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/leagues', leagueRoutes);
router.use('/teams', teamsRoutes);
router.use('/categories', categoryRoutes);
router.use('/tags', tagRoutes);
router.use('/product-tags', productTagRoutes);
router.use('/orders', orderRoutes);
router.use('/order-items', orderItemRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
