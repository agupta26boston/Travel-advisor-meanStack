const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const db = "mongodb://localhost:27017/travelapp";
const destination = require('../models/destination');

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err) {
        console.log('Error connecting');
    }
});

router.get('/all', function(req, res){
    destination.find({})
        .exec(function(err, destinations) {
        if(err) {
            console.log('Error getting the destinations');
        } else {
            console.log(destinations);
            res.json(destinations);
        }
    });
});

router.get('/destinations/:id', function(req, res) {
    console.log('Requesting a specific destination');
    destination.findById(req.params.id)
        .exec(function(err, destination) {
            if(err) {
                console.log('Error getting the destination');
            } else {
                res.json(destination);
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