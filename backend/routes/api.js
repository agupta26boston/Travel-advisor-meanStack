const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const db = "mongodb://localhost:27017/travelapp";
const destination = require('../models/destination');
const attractions = require('../models/attraction');
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if (err) {
        console.log('Error connecting');
    }
});


var boston = new destination({
    _id: new mongoose.Types.ObjectId(),
    title: 'Boston',
    desc: "Welcome to Boston!"
});

boston.save(function(err) {
    if (err) return handleError(err);
});

var attraction1 = new attractions({
    destination_id: boston._id,
    att_name: 'MFA',
    att_desc: 'near NEU'
});

attraction1.save(function(err) {
    if (err) return handleError(err);
});


boston.attractions.push(attraction1)
boston.save(function(err) {
    if (err) return handleError(err);
});

attractions.
find({ destination_id: destination._id }).
exec(function(err, attractions) {
    if (err) return handleError(err);
    console.log('The attractions are an array: ', attractions);
});











router.get('/all', function(req, res) {
    destination.find({})
        .exec(function(err, destinations) {
            if (err) {
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
            if (err) {
                console.log('Error getting the destination');
            } else {
                res.json(destination);
                console.log(destination);
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