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

// boston.save(function(err) {
//     if (err) return handleError(err);
// });

var attraction1 = new attractions({
    destination_id: boston._id,
    att_name: 'Boston harbor',
    att_desc: 'southend'
});
// var attraction2 = new attractions({
//     destination_id: boston._id,
//     att_name: 'MFA-2',
//     att_desc: 'near NEU-2'
// });

attraction1.save(function(err) {
    if (err) return handleError(err);
});
// attraction2.save(function(err) {
//     if (err) return handleError(err);
// });
boston.attractionList.push(attraction1)
    // boston.attractionList.push(attraction2)
    //boston.attractions.push(attraction1.att_name)

destination.
findOne({ title: 'Boston' }).
populate('attractionList'). // only works if we pushed refs to children
exec(function(err, boston) {
    if (err) return handleError(err);
    console.log(boston);
});

boston.save(function(err) {
    if (err) return handleError(err);
});

// attractions.
// find({ destination_id: destination._id }).
// exec(function(err, attractionList) {
//     if (err) return handleError(err);
//     console.log('The attractions are an array: ', attractionList);
// });





router.get('/all', function(req, res) {
    console.log('Getting the destinations');
    destination.find({})
        .exec(function(err, destinations) {
            if (err) {
                console.log('Error getting the destinations');
            } else {
                // console.log(destinations);
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
                //console.log(destination);
            }
        });
});

module.exports = router;