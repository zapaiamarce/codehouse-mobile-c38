var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users listing. */
router.get('/singup/', function(req, res, next) {
  res.send('new user');
});

/* GET users listing. */
router.get('/login/', function(req, res, next) {
  res.send('Specify userName');
});

/* GET users listing. */
router.get('/login/:userName', function(req, res, next) {
  res.send('hello ' + req.params.userName );
});

module.exports = router;
