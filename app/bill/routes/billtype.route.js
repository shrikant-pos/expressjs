var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var billtypeController = require('../controllers/billtype.controller');

// ##########################  billtype routes  ##########################
// get routes
router.get('/getbilltype/:id', middlewares.handlers.asyncHandler(billtypeController.getbilltypeByID));
router.post('/getbilltypes', middlewares.handlers.asyncHandler(billtypeController.getbilltypes));
// update routes
router.post('/updatebilltype', middlewares.handlers.asyncHandler(billtypeController.updatebilltype));
// add routes
router.post('/addbilltypes', middlewares.handlers.asyncHandler(billtypeController.addbilltypes));
// delete routes
router.post('/deletebilltypes', middlewares.handlers.asyncHandler(billtypeController.deletebilltypes));

// custom routes

module.exports = router;

