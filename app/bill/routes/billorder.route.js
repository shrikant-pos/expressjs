var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var billorderController = require('../controllers/billorder.controller');

// ##########################  billorder routes  ##########################
// get routes
router.get('/getbillorder/:id', middlewares.handlers.asyncHandler(billorderController.getbillorderByID));
router.post('/getbillorders', middlewares.handlers.asyncHandler(billorderController.getbillorders));
// update routes
router.post('/updatebillorder', middlewares.handlers.asyncHandler(billorderController.updatebillorder));
// add routes
router.post('/addbillorders', middlewares.handlers.asyncHandler(billorderController.addbillorders));
// delete routes
router.post('/deletebillorders', middlewares.handlers.asyncHandler(billorderController.deletebillorders));

// custom routes

module.exports = router;

