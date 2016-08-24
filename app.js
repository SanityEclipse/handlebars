var express = require ('express');
var app = express();

app.get('/', (req, res)=>{
  res.json({message: 'Hello from express!'});
});

app.get('/page2', (req, res)=> {
  res.json({message: 'I am page 2!!!'});
});

app.listen(3000, function () {
console.log('Listening on port 3000') ;
});
