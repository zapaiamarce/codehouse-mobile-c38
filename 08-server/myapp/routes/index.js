var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CodeHouse course' });
});

router.post('/', function(req, res, next){

  var options = {
    root: __dirname + '/../public/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendFile('images/img1.jpg', options);
});

module.exports = router;
