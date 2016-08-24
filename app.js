var express = require('express');
var hbs = require('hbs');
var locals = require('./locals.js')

var app = express();

app.set('view engine', 'hbs');
hbs.localsAsTemplateData(app);

locals(app);

app.get('/', (req, res) => {
    res.render('home', {
        cohortName: 'g31',
        foods: [
            'chalupa',
            'ceviche',
            'candy sprinkles'
        ]
    });
});

app.get('/page2', (req, res) => {
    res.render('page2');
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});
