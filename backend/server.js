var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/trips')


var userNew = mongoose.model('usernew', { name: String, gender: String });

userNew.create({
    name: 'user1',
    gender: 'female'
}).then(function(err, usernew) {
    console.log(err, usernew);
});

app.get('/', (req, res) => {

    res.send('hello new 1');
})


app.listen(4321);