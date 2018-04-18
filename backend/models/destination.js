const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = require('mongoose').Schema.ObjectId;
const attractions = require('../models/attraction');

const destinationSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    desc: String,
    attractions: [{ type: Schema.Types.ObjectId, ref: 'attractions' }]
});

module.exports = mongoose.model('destinations',destinationSchema);