const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    title: String,
    desc: String
});

module.exports = mongoose. model('destinations',destinationSchema);