var express = require('express');
var router = express.Router();

var middlewares = require('../../middlewares/index');
var settingsController = require('../controllers/settings.controller');

// ##########################  settings routes  ##########################
// get routes
router.get('/getsettings/:id', middlewares.handlers.asyncHandler(settingsController.getsettingsByID));
router.post('/getsettingss', middlewares.handlers.asyncHandler(settingsController.getsettingss));
// update routes
router.post('/updatesettings', middlewares.handlers.asyncHandler(settingsController.updatesettings));
// add routes
router.post('/addsettingss', middlewares.handlers.asyncHandler(settingsController.addsettingss));
// delete routes
router.post('/deletesettingss', middlewares.handlers.asyncHandler(settingsController.deletesettingss));

module.exports = router;

