var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var billpaymentController = require('../controllers/billpayment.controller');

// ##########################  billpayment routes  ##########################
// get routes
router.get('/getbillpayment/:id', middlewares.handlers.asyncHandler(billpaymentController.getbillpaymentByID));
router.post('/getbillpayments', middlewares.handlers.asyncHandler(billpaymentController.getbillpayments));
// update routes
router.post('/updatebillpayment', middlewares.handlers.asyncHandler(billpaymentController.updatebillpayment));
// add routes
router.post('/addbillpayments', middlewares.handlers.asyncHandler(billpaymentController.addbillpayments));
// delete routes
router.post('/deletebillpayments', middlewares.handlers.asyncHandler(billpaymentController.deletebillpayments));

// custom routes

module.exports = router;

