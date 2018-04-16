const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const db = "mongodb://localhost:27017/trips";
const trip = require('../models/trip');
const user = require('../models/user');
//Now, using trip to perform CRUD Operations.
mongoose.Promise = global.Promise;
//to connect to our database
mongoose.connect(db, function(err) {
    if (err) {
        console.log('Error connecting');
    }
});

router.get('/all', function(req, res) {
    trip.find({})
        .exec(function(err, destinations) {
            if (err) {
                console.log('Error getting the destinations');
            } else {
                console.log(destinations);
                res.json(destinations);
            }
        });
});

router.get('/user', function(req, res) {
    user.find({})
        .exec(function(err, user) {
            if (err) {
                console.log('Error getting the user');
            } else {
                console.log(user);
                res.json(user);
            }
        });
});


module.exports = router;

// user.create({
//     userName: 'user1',
//     password: 'try'
// }).then(function(err, user) {
//     console.log(err, user);
// });

router.post('/create', function(req, res) {

    console.log('Creating a User');
    var newUser = new user()
    newUser.userName = req.body.userName;
    newUser.password = req.body.password;
    newUser.save(function(err, user) {

        if (err) {
            console.log('Error inserting the user')
        } else {
            res.json(user);
        }
    });


})