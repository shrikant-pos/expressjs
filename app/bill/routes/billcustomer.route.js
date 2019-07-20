var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var billcustomerController = require('../controllers/billcustomer.controller');

// ##########################  billcustomer routes  ##########################
// get routes
router.get('/getbillcustomer/:id', middlewares.handlers.asyncHandler(billcustomerController.getbillcustomerByID));
router.post('/getbillcustomers', middlewares.handlers.asyncHandler(billcustomerController.getbillcustomers));
// update routes
router.post('/updatebillcustomer', middlewares.handlers.asyncHandler(billcustomerController.updatebillcustomer));
// add routes
router.post('/addbillcustomers', middlewares.handlers.asyncHandler(billcustomerController.addbillcustomers));
// delete routes
router.post('/deletebillcustomers', middlewares.handlers.asyncHandler(billcustomerController.deletebillcustomers));

// custom routes

module.exports = router;

