const express = require('express');
const Offering = require('../models/offering');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const offerings = await Offering.find();
        res.json(offerings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
