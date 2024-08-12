require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.json());
app.use(cors());

const coreValuesRouter = require('./routes/coreValues');
const uniqueValuesRouter = require('./routes/uniqueValues');
const testimonialsRouter = require('./routes/testimonials');
const offeringsRouter = require('./routes/offerings');

app.use('/api/core-values', coreValuesRouter);
app.use('/api/unique-values', uniqueValuesRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/offerings', offeringsRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
