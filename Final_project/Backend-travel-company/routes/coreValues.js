const express = require('express');
const CoreValue = require('../models/coreValue');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const coreValues = await CoreValue.find();
        res.json(coreValues);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
