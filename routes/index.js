var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  console.log('headers: ', req.headers);
  console.log('body: ', req.body);
//  console.log('\n\nreq: ', req);
  res.json(req.body);
});


module.exports = router;
