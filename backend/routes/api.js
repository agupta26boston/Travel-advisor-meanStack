const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const db = "mongodb://localhost:27017/trips";
const trip = require('../models/trip');

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err) {
        console.log('Error connecting');
    }
});

router.get('/all', function(req, res){
    trip.find({})
        .exec(function(err, destinations) {
        if(err) {
            console.log('Error getting the destinations');
        } else {
            console.log(destinations);
            res.json(destinations);
        }
    });
});

module.exports = router;

// userNew.create({
//     name: 'user1',
//     gender: 'female'
// }).then(function(err, usernew) {
//     console.log(err, usernew);
// });0