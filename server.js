const express = require('express');
const PORT = process.env.PORT || 3030

const app = express();

console.log(__dirname);

app.use(express.json());
app.use(express.urlencoded({extend: false}));
app.use(express.static(path(__dirname, 'public')));

app.get('/', (req, res) =>{
    console.log(req.body);
});

app.get('/', (req, res) =>{
    res.send('Yo Yo');
});



app.listen(PORT, (err) => console.log(`${err ? err: 'Running on port 3030'}`));