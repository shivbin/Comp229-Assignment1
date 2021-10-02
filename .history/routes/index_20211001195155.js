/* Shiv Bindra
     Student #  300758190
     Assignment 1
     COMP 229- SECTION 001
     DATE - OCTOBER, 01, 2021


 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET home page back up if user writes /home. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home'});
});


/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About', page: 'about'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', page: 'projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page: 'services'});
});

/* GET Contact Me page. */
router.get('/contact-me', function(req, res, next) {
  res.render('index', { title: 'Contact-me', page: 'contact'});
});


module.exports = router;
