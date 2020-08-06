const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('intro/select');
});

router.get('/home', (req, res, next) => {
    res.render('intro/index', { title: 'Trivia App' });
  });

module.exports = router;