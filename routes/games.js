const express = require('express');
const axios = require('axios');
const router = express.Router();



router.get('/', async (req, res) =>{
    
      const reponse = await axios.get('https://opentdb.com/api.php?amount=26&difficulty=easy&type=multiple');
       
      res.render('intro/level', {questions: reponse.data.results});   
});

/* GET movie by id listing. */
router.get('/:categoryid', async (req, res, next) => {
    const {categoryid} = req.params;
  
    res.render('intro/level', {categoryid});

  });

router.get('/:categoryid/:difficultyLevel', async (req, res, next) => {
  const {categoryid} = req.params;
  const {difficultyLevel} = req.params;

  try {
    const reponse = await axios.get(
      `https://opentdb.com/api.php?amount=26&category=${categoryid}&difficulty=${difficultyLevel}&type=multiple`,
    );
    res.render('games/index', {questions: reponse.data.results});
  } catch (e) {
    console.log(e);
  }
});
  
  module.exports = router;