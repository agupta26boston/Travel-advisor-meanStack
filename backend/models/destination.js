const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = require('mongoose').Schema.ObjectId;
const attractions = require('../models/attraction');

const destinationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    desc: String,
<<<<<<< HEAD
    img_src: String,
    attractions: [{ type: Schema.Types.ObjectId, ref: 'attractions' }],
    latitude: Number,
    longitude: Number
=======
    img_src:String,
    attractions: [{ type: Schema.Types.ObjectId, ref: 'attractions' }],
    latitude: Number,
    longitude:Number
>>>>>>> 414f8766577fb1451c5f1497f0ee670a380c816f
});

module.exports = mongoose.model('destinations', destinationSchema);