var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('player', { title: 'Search Results for Player' });
});


module.exports = router;
