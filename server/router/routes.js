// library package mandatory
const express = require('express');
const router = express.Router();

// Calling function irtRouter to collect the designated data from the controller 
var irtRouter = require('./irtRouter');
var drawbarRouter = require('./drawbarRouter');
var springRouter = require('./springRouter');
var steerRouter = require('./steerRouter');


// initilize the routes 
router.use('/', irtRouter);
router.use('/', drawbarRouter);
router.use('/', springRouter);
router.use('/', steerRouter);


module.exports = router;