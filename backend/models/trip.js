const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//this schema will map to our mongoDb collection.
const tripSchema = new Schema({
    title: String,
    desc: String
});

module.exports = mongoose.model('destinations', tripSchema);