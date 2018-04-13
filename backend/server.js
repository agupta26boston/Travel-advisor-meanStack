var express = require('express');
var app = express();
const path = require('path');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trips');
//added by me
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

//---- ended

var userNew = mongoose.model('usernew', { name: String, gender: String });

userNew.create({
    name: 'user2',
    gender: 'male'
}).then(function(err, usernew) {
    //console.log(err, usernew);
});

app.get('/', (req, res) => {

    res.send('hello new 1');
});
//added by me
app.get('/api/todos', function(req, res) {

    // use mongoose to get all todos in the database
    userNew.find(function(err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(todos); // return all todos in JSON format
    });
});

app.use(express.static(path.join(__dirname, '../frontend/dist')));
// application -------------------------------------------------------------
app.get('*', function(req, res) {
   // res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
//ended

app.listen(4321);
console.log("App listening on port 4321");