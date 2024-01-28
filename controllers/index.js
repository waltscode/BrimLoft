const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const signupLoginRoutes = require('./signupLoginRoutes');
const orderDetailRoutes = require('./orderDetailRoutes');
const checkoutRoutes = require('./checkoutRoutes');

router.use('/', homeRoutes);
router.use('/', signupLoginRoutes);
router.use('/', orderDetailRoutes);
router.use('/', checkoutRoutes);
router.use('/api', apiRoutes);

module.exports = router;
