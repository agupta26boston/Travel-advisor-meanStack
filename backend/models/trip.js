const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    title: String,
    desc: String
});

module.exports = mongoose. model('destinations',tripSchema);