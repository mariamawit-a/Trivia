const express = require('express');
//const axios = require('axios');
const path = require('path');
const app = express();
var $ = require('jquery');
const PORT = process.env.PORT || 3000

//app.set('views', path.join(__dirname, 'views'));
require('dotenv').config();

const indexRouter = require('./routes/index');
const gameRouter = require('./routes/games');

app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/games', gameRouter);

app.listen(PORT, (err) =>
  console.log(`${err ? err : `running on PORT ${PORT}`}`),
);




// var config = {
//     method: 'get',
//     url: 'https://opentdb.com/api.php?amount=26&difficulty=easy&type=multiple',
//     headers: { 
//       'Cookie': 'PHPSESSID=j%2CRBjl614wLiNuyQj0fiE0'
//     }
//   };
  
//   axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


// var request = new XMLHttpRequest()

// request.open('GET', 'https://opentdb.com/api.php?amount=26&difficulty=easy&type=multiple', true)
// request.onload = function () {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)

//   if (request.status >= 200 && request.status < 400) {
//     console.log(data.results)
//   } else {
//     console.log('error')
//   }
// }

// request.send()




