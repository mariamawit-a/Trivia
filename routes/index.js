const express = require('express');
const axios = require('axios');
const router = express.Router();;

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('intro/index');
});

router.get('/home', async(req, res, next) => {
    const reponse = await axios.get('https://opentdb.com/api_category.php');
       
    res.render('intro/select', {value: reponse.data.trivia_categories});
  });

module.exports = router;