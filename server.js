const express = require('express');
const axios = require('axios');

const PORT = process.env.PORT || 3030

const app = express();

// //console.log(__dirname);
// app.listen(PORT);

app.use(express.json());
// //app.use(express.urlencoded({extend: false}));
// //app.use(express.static(path(__dirname, 'public')));

// app.get('/', (req, res) =>{
//     res.send("hi");
// });

app.get('/', (req, res) =>{
    var config = {
        method: 'get',
        url: 'https://opentdb.com/api.php?amount=26&difficulty=easy&type=multiple',
        headers: { 
          'Cookie': 'PHPSESSID=j%2CRBjl614wLiNuyQj0fiE0'
        }
      };
      
      axios(config)
      .then(function (response) {
        res.send(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
});

app.listen(PORT, (err) => console.log(`${err ? err: 'Running on port 3030'}`));

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




