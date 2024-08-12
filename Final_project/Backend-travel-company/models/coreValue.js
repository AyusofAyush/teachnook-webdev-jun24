const mongoose = require('mongoose');

const coreValueSchema = new mongoose.Schema({
    coreNo: Number,
    coreValue: String,
    corePara: String
});

module.exports = mongoose.model('CoreValue', coreValueSchema);
