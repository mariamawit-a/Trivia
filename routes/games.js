const express = require('express');
const axios = require('axios');
const router = express.Router();

router.use(express.urlencoded({extended: true}))

router.get('/', async (req, res) =>{
    
      const reponse = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
       
      res.render('intro/level', {questions: reponse.data.results});   
});

/* GET movie by id listing. */
router.get('/:categoryid', async (req, res, next) => {
    const {categoryid} = req.params;
  
    // res.render('intro/level', {categoryid});

    try {
      const reponse = await axios.get(
        `https://opentdb.com/api.php?amount=20&category=${categoryid}&type=multiple`,
      );
      res.render('games/index', {questions: reponse.data.results});
    } catch (e) {
      console.log(e);
    }

  });

router.get('/:categoryid/:difficultyLevel', async (req, res, next) => {
  const {categoryid} = req.params;
  const {difficultyLevel} = req.params;

  try {
    const reponse = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${categoryid}&difficulty=${difficultyLevel}&type=multiple`,
    );
    res.render('games/index', {questions: reponse.data.results});
  } catch (e) {
    console.log(e);
  }
});

router.post('/submit', async(req, res, next) => {
  let score = 0;
  console.log(req.body);
  Object.values(req.body).forEach(answer =>{

    if(answer=='correct')
      score++;
  });

  res.render('games/score', {score});
});
  
  module.exports = router;