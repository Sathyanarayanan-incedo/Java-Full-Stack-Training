var routes = require('./HR.Route');
const router = require('express').Router();

router.use('/hr',routes)
module.exports = router;