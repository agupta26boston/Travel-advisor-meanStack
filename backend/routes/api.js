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

<<<<<<< HEAD
router.post('/addcomments', function(req, res) {
    console.log('Posting an comment');
    // var product = new campSchema.Product(req.body.dataProduct);
    //var attraction = new attractions();
    var comment = req.body.title;
    console.log(comment);
=======
router.post('/attractions/:id', function(req, res) {
    var newComment = new comment();
    var att_id = req.body.attraction_id;
    newComment.attraction_id = req.body.attraction_id;
    newComment.comment_content = req.body.comment_content;     
    newComment.save(function(err, comment) {
        if(err) {
            console.log('Error inserting a comment');
        } else {
            res.json(comment);
        }
    });   
    attractions.findByIdAndUpdate(att_id, 
        {$push: {comments: newComment}},
        {safe: true, upsert: true},
        function(err, model) {
        console.log(err);
    });
    
    // attractions.findById(req.body.attraction_id).comments.push(newComment)
    // attractions.save(function(err) {
    //     if (err) return handleError(err);
    // });
>>>>>>> e1e3b9da902760daab468f3347a9411e1a517259
});

// var boston = new destination({
//     _id: new mongoose.Types.ObjectId(),
//     title: 'Boston',
//     desc: "Welcome to Bos!",
<<<<<<< HEAD
//     img_src: "../assets/images/Boston.jpg",
//     latitude: 42.3601,
//     longitude: -71.0589
//  });
=======
//     img_src: "../assets/images/Boston.jpg"
// });
>>>>>>> e1e3b9da902760daab468f3347a9411e1a517259

//  boston.save(function(err) {
//     if (err) return handleError(err);
//  });

<<<<<<< HEAD
//  var attraction1 = new attractions({
//     destination_id: boston._id,
//     att_name: 'Museum of Fine Arts',
//     att_desc: 'Located near Northeastern University',
//     img_src: "../assets/images/mfa.jpg"
//  });
=======
// var attraction1 = new attractions({
//     destination_id: boston._id,
//     att_name: 'Museum of Fine Arts',
//     att_desc: 'Located near Northeastern University',
//     img_src: "../assets/images/mfa.jpg",
//     latitude: 42.3601,
//     longitude: -71.0589
// });
>>>>>>> e1e3b9da902760daab468f3347a9411e1a517259

//  attraction1.save(function(err) {
//     if (err) return handleError(err);
//  });

<<<<<<< HEAD
//  var comment1 = new comment({
//     attraction_id: attraction1._id,
//     comment_content: "A beautiful museum"
//  });
=======
// var comment1 = new comment({
//     attraction_id: attraction1._id,
//     comment_content: "A beautiful museum"
// });

// comment1.save(function(err) {
//     if (err) return handleError(err);
// });

// attraction1.comments.push(comment1)
// boston.save(function(err) {
//     if (err) return handleError(err);
// });
>>>>>>> e1e3b9da902760daab468f3347a9411e1a517259

//  comment1.save(function(err) {
//     if (err) return handleError(err);
//  });

//  attraction1.comments.push(comment1)
//  boston.save(function(err) {
//     if (err) return handleError(err);
//  });

//  boston.attractions.push(attraction1)
//  boston.save(function(err) {
//     if (err) return handleError(err);
//  });

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
                //  console.log(attractions);
            }
        });
});

router.get('/delete/:id', function(req, res) {
    console.log('Deleting a Comment');
    comment.findByIdAndRemove(req.params.id)
        .exec(function(err, com) {
            if (err) {
                console.log('Error deleting the comment');
            } else {
                res.json(com);
                //  console.log(attractions);
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