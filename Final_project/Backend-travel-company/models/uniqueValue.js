const mongoose = require('mongoose');

const uniqueValueSchema = new mongoose.Schema({
    coreNo: Number,
    coreValue: String,
    corePara: String,
    showCoreNo: { type: Boolean, default: false }
});

module.exports = mongoose.model('UniqueValue', uniqueValueSchema);
