const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    testimonialPara: String,
    author: String
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
