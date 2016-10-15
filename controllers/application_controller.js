var models  = require('../models');
var express = require('express');
var router  = express.Router();
;
router.get('/', function(req, res) {
  res.redirect('/burgers');
});

module.exports = router

// previously the above was in burgers_controller.js but for some reason
// to make the burgers_controller 'lean' created a new file for this instead.
