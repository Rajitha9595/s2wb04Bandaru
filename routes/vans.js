var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('vans', { title: 'search results for vans' });
});

module.exports = router;