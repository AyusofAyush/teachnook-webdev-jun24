const express = require('express');
const UniqueValue = require('../models/uniqueValue');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const uniqueValues = await UniqueValue.find();
        res.json(uniqueValues);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
