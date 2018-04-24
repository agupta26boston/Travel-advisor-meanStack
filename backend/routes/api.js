const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
const db = "mongodb://localhost:27017/travelapp";
const destination = require('../models/destination');
const attractions = require('../models/attraction');
const comment = require('../models/comment');

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if (err) {
        console.log('Error connecting');
    }
});

router.post('/attractions/:id', function(req, res) {
    console.log('Posting a comment');
   // var product = new campSchema.Product(req.body.dataProduct);
    //var attraction = new attractions();    
    var newComment = new comment();
    newComment.comment_content = req.body.comment_content;     
    newComment.save(function(err, comment) {
        if(err) {
            console.log('Error inserting a comment');
        } else {
            res.json(comment);
        }
    });
    // attractions.findById(req.params.id).comments.push(newComment)  
});

// var boston = new destination({
//     _id: new mongoose.Types.ObjectId(),
//     title: 'Ney York',
//     desc: "Welcome to NY!"
// });

// boston.save(function(err) {
//     if (err) return handleError(err);
// });

// var attraction1 = new attractions({
//     destination_id: boston._id,
//     att_name: 'aatt1',
//     att_desc: 'near nY'
// });

// attraction1.save(function(err) {
//     if (err) return handleError(err);
// });

// var comment1 = new comment({
//     attraction_id: attraction1._id,
//     comment_content: "THis is a comment underNY"
// });

// comment1.save(function(err) {
//     if (err) return handleError(err);
// });

// attraction1.comments.push(comment1)
// boston.save(function(err) {
//     if (err) return handleError(err);
// });

// boston.attractions.push(attraction1)
// boston.save(function(err) {
//     if (err) return handleError(err);
// });

// attractions.
// find({ destination_id: destination._id }).
// exec(function(err, attractions) {
//     if (err) return handleError(err);
//     console.log('The attractions are an array: ', attractions);
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
    destination.findById(req.params.id).populate('attractions')
        .exec(function(err, destination) {
            if (err) {
                console.log('Error getting the destination');
            } else {
                res.json(destination);
                // console.log(destination);
            }
        });
});

router.get('/attractions/:id', function(req, res) {
    console.log('Requesting a specific attraction');
    attractions.findById(req.params.id).populate('comments')
        .exec(function(err, attractions) {
            if (err) {
                console.log('Error getting the attraction');
            } else {
                res.json(attractions);
                 console.log(attractions);
            }
        });
});

router.get('/users/me', checkAuthenticated, (req, res) => {
    res.json(users[req.user]);
});

function checkAuthenticated(req, res, next) {
    if (!req.header('authorization'))
        return res.status(401).send({ message: 'Unauthorized requested. Missing authentication header' });

    var token = req.header('authorization').split(' ')[1];

    var payload = jwt.decode(token, '123');

    if (!payload)
        return res.status(401).send({ message: 'Unauthorized requested. Authentication header invalid' });

    req.user = payload;

    next();
}

module.exports = router;

// userNew.create({
//     name: 'user1',
//     gender: 'female'
// }).then(function(err, usernew) {
//     console.log(err, usernew);
// });0