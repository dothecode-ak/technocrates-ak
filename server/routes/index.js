var express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const DB = require('../database/config').Mongo_URI;
//db connection
mongoose.connect(DB, {
  useNewURLParser: true,
}).then(() => {
  console.log('DB is connected');
}).catch((err) => {
  console.log(err);
})

var router = express.Router();

const middleware = (req, res, next) => {
  console.log('Middle ware');
  next();
}
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });

});
router.get('/about', middleware, (req, res) => {
  res.render('index', { title: 'About' });
  console.log('m2');
});

router.get('/contact', (req, res) => {
  res.render('index', { title: 'Contact' });
});
router.get('/signin', (req, res) => {
  res.render('index', { title: 'Login' });
});
router.get('/signup', (req, res) => {
  res.render('index', { title: 'Registration' });
});

module.exports = router;
