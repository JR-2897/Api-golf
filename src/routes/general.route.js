const express = require('express');
const router = express.Router();
const adminRouter = require('./admin.route');
const golfRouter = require('./golf.route');
const managerRouter = require('./manager.route');

router.use(adminRouter);
router.use(golfRouter);
router.use(managerRouter);

module.exports = router;
