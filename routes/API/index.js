const router = require('express').Router();

const { post } = require('./user-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);


module.exports = router;