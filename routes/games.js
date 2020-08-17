const express = require('express');
const axios = require('axios');
const router = express.Router();

router.use(express.urlencoded({extended: true}))

router.get('/', async (req, res) =>{
    
      const reponse = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple');
       
      res.render('intro/level', {questions: reponse.data.results});   
});

router.get('/:categoryid', async (req, res, next) => {
    const {categoryid} = req.params;
  
    try {
      const reponse = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${categoryid}&type=multiple`,
      );
      res.render('games/index', {questions: reponse.data.results});
    } catch (e) {
      console.log(e);
    }

  });

  router.get('/chill/:categoryid', async (req, res, next) => {
    const {categoryid} = req.params;
  
    try {
      const reponse = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${categoryid}&type=multiple`,
      );
      res.render('games/chill', {questions: reponse.data.results});
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

router.post('/submit/:timeleft', async(req, res, next) => {

  //get the time left and compute the time taken
  const{timeleft} = req.params;
  const timetaken = 60000-timeleft;
  const minutes = Math.floor((timetaken % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timetaken % (1000 * 60)) / 1000);
  
  let score = 0;
  console.log(req.body);
  Object.values(req.body).forEach(answer =>{

    if(answer=='correct')
      score++;
  });

  res.render('games/score', {score:score, time: minutes.toString().padStart(2, 0)+":"+ seconds.toString().padStart(2, 0)});
});
  
  module.exports = router;