const router = require('express').Router();
const userRoutes = require('npm clear cache/api/users-routes.js');
const thoughtRoutes = require('./api/thoughtsRoutes.js');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;