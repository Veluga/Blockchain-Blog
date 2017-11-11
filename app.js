const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('static'))

app.get('/', function(req, res, next) {
    res.render('index');
})

app.listen(3000);