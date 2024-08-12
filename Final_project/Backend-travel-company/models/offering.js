const mongoose = require('mongoose');

const offeringSchema = new mongoose.Schema({
    offeringNo: Number,
    offeringImg: String,
    offeringHeader: String,
    offeringDescription: String
});

module.exports = mongoose.model('Offering', offeringSchema);
