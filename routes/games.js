const express = require('express');
const axios = require('axios');
const router = express.Router();



router.get('/', async (req, res) =>{
    
      const reponse = await axios.get('https://opentdb.com/api.php?amount=26&difficulty=easy&type=multiple');
       
      res.render('games/index', {value: reponse.data.results});   
});

/* GET movie by id listing. */
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
  
    try {
      const { data: question } = await axios.get(
        `https://opentdb.com/api.php?amount=${id}&difficulty=easy&type=multiple`,
      );
      // const movieData = movie.data;
      console.log(movie);
      res.render('games/question', {
        question,
      });
    } catch (e) {
      console.log(e);
    }
  });
  
  module.exports = router;