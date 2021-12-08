const express = require('express');

var todoController = require('./controllers/todoController');
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('./public'));

todoController(app);


app.listen(5500);
console.log("Listening to port 5500");