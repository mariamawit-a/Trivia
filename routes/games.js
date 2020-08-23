const express = require('express');
const axios = require('axios');
const { response } = require('express');
const router = express.Router();
const generate = require('meaningful-string');


router.get('/party', async(req, res, next) => {

  const token = await axios.get(
    `https://opentdb.com/api_token.php?command=request`,
  );
    const key = token.data.token;

  try {
    const response1 = await axios.get(
      `https://opentdb.com/api.php?amount=50&type=multiple&token=${key}`,
    );
    const response2 = await axios.get(
      `https://opentdb.com/api.php?amount=50&type=multiple&token=${key}`,
    );

    let item1 = response1.data.results;
    let item2 = response2.data.results;

    console.log(typeof(item1), item1.length);
    console.log(typeof(item2), item2.length);
    

    res.render('games/party', {questions1: item1, questions2 : item2});
  } catch (e) {
    console.log(e);
  }


});
router.get('/:categoryid', async (req, res, next) => {
    const {categoryid} = req.params;
  
    try {
      const response = await axios.get(
        `https://opentdb.com/api.php?amount=20&category=${categoryid}&type=multiple`,
      );
      res.render('games/index', {questions: response.data.results});
    } catch (e) {
      console.log(e);
    }

  });

  router.get('/chill/:categoryid', async (req, res, next) => {
    const {categoryid} = req.params;
  
    try {
        const response = await axios.get(
          `https://opentdb.com/api_count.php?category=${categoryid}&type=multiple`,
        );
        var number = response.data.category_question_count.total_question_count;
        console.log(number);  
          try {
            const reponse = await axios.get(
              `https://opentdb.com/api.php?amount=${number-5}&category=${categoryid}&type=multiple`,
            );
            res.render('games/chill', {questions: reponse.data.results});
          } catch (e) {
            console.log(e);
          }
    } catch (e) {
      console.log(e);
    }

  });

router.post('/submit/:timeleft', async(req, res, next) => {

  //get the time left and compute the time taken
  const{timeleft} = req.params;
  const timetaken = 120000-timeleft;
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

router.post('/party/submit', async(req, res, next) => {

  
  let right = 0;
  let wrong = 0;
  console.log(req.body);
  Object.values(req.body).forEach(answer =>{

    if(answer=='correct')
      right++;
    else if(answer=='incorrect')
      wrong++;
  });

  let total = 0
  if(2*right-wrong>0){
    total = 2*right-wrong;
  }

  res.render('games/share', {right, wrong, total});
});


  
  module.exports = router;