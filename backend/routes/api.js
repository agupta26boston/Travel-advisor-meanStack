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


<<<<<<< HEAD
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
=======
// var boston = new destination({
//     _id: new mongoose.Types.ObjectId(),
//     title: 'Boston',
//     desc: "Welcome to Boston!"
// });

// boston.save(function(err) {
//     if (err) return handleError(err);
// });

// var attraction1 = new attractions({
//     destination_id: '5ad670bc78ccff22cc7e4559',
//     att_name: 'MFA1',
//     att_desc: 'near11 NEU'
>>>>>>> a74af68cd811fb67e22b6ebd5251b5994a64f0a6
// });

// attraction1.save(function(err) {
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
<<<<<<< HEAD
                //console.log(destination);
=======
                // console.log(destination);
>>>>>>> a74af68cd811fb67e22b6ebd5251b5994a64f0a6
            }
        });
});

<<<<<<< HEAD
module.exports = router;
=======
router.get('/users/me', checkAuthenticated, (req,res) => {
    res.json(users[req.user]);
});

function checkAuthenticated(req, res, next) {
    if(!req.header('authorization'))
        return res.status(401).send({message: 'Unauthorized requested. Missing authentication header'});

    var token = req.header('authorization').split(' ')[1];

    var payload = jwt.decode(token, '123');

    if(!payload)
        return res.status(401).send({message: 'Unauthorized requested. Authentication header invalid'});

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
>>>>>>> a74af68cd811fb67e22b6ebd5251b5994a64f0a6
