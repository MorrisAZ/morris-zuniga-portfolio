var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' }); //renders the inside of the index.ejs file
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' }); 
});

/* GET about  me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'about Me' }); 
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' }); 
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact' }); 
});






module.exports = router;
