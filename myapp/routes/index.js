var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next){
  res.sendFile(path.join(__dirname ,'public' , 'index.html'))
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
