const express = require('express');
const Testimonial = require('../models/testimonial');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        res.json(testimonials);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
