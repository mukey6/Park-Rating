const router = require('express').Router();
const apiRoutes = require('./apiroutes');
const homeRoutes = require('./homeRoutes.js');
const dashRoutes = require('./dashboardRoutes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashRoutes);
router.use('/api', apiRoutes);

module.exports = router;
