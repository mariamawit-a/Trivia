const axios = require('axios');
const express = require('express');
const PORT = process.env.PORT || 3010

const app = express();

console.log(__dirname);

app.use(express.json());

app.get('/', (req, res) =>{
});

app.get('/', (req, res) =>{
    res.send('Yo Yo');
});

var config = {
  method: 'get',
  url: 'https://opentdb.com/api.php?amount=26',
  headers: { 
    'Cookie': 'PHPSESSID=VHZINnKTOiePi%2COZ8PQzi0'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
