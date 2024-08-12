# Final Project

## Travel company Backend App for GET APIs

Here's a basic Express.js application that fulfills your requirements. This application connects to MongoDB, defines the necessary routes, and includes a script to populate the database with initial data.

### 1. Setup
You'll need to install the necessary packages:
```bash
npm init -y
npm install express mongoose dotenv
```

### 2. Directory Structure
Create a simple directory structure like this:

```
backend/
├── app.js
├── models/
│   ├── coreValue.js
│   ├── uniqueValue.js
│   ├── testimonial.js
│   └── offering.js
├── routes/
│   ├── coreValues.js
│   ├── uniqueValues.js
│   ├── testimonials.js
│   └── offerings.js
└── seed.js
```

### 3. MongoDB Models

Create the following model files under `models/`:

#### `models/coreValue.js`
```javascript
const mongoose = require('mongoose');

const coreValueSchema = new mongoose.Schema({
    coreNo: Number,
    coreValue: String,
    corePara: String
});

module.exports = mongoose.model('CoreValue', coreValueSchema);
```

#### `models/uniqueValue.js`
```javascript
const mongoose = require('mongoose');

const uniqueValueSchema = new mongoose.Schema({
    coreNo: Number,
    coreValue: String,
    corePara: String,
    showCoreNo: { type: Boolean, default: false }
});

module.exports = mongoose.model('UniqueValue', uniqueValueSchema);
```

#### `models/testimonial.js`
```javascript
const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    testimonialPara: String,
    author: String
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
```

#### `models/offering.js`
```javascript
const mongoose = require('mongoose');

const offeringSchema = new mongoose.Schema({
    offeringNo: Number,
    offeringImg: String,
    offeringHeader: String,
    offeringDescription: String
});

module.exports = mongoose.model('Offering', offeringSchema);
```

### 4. Routes

Create the following route files under `routes/`:

#### `routes/coreValues.js`
```javascript
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
```

#### `routes/uniqueValues.js`
```javascript
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
```

#### `routes/testimonials.js`
```javascript
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
```

#### `routes/offerings.js`
```javascript
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
```

### 5. Main Application (`app.js`)
```javascript
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(express.json());

const coreValuesRouter = require('./routes/coreValues');
const uniqueValuesRouter = require('./routes/uniqueValues');
const testimonialsRouter = require('./routes/testimonials');
const offeringsRouter = require('./routes/offerings');

app.use('/api/core-values', coreValuesRouter);
app.use('/api/unique-values', uniqueValuesRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/offerings', offeringsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### 6. Seeding the Database (`seed.js`)

Create a script to populate the database with initial data:

#### `seed.js`
```javascript
require('dotenv').config();
const mongoose = require('mongoose');
const CoreValue = require('./models/coreValue');
const UniqueValue = require('./models/uniqueValue');
const Testimonial = require('./models/testimonial');
const Offering = require('./models/offering');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    console.log('Connected to MongoDB for seeding');

    // Core Values
    const coreValues = [
        { coreNo: 1, coreValue: "Excellence", corePara: "We strive for excellence in everything we do." },
        { coreNo: 2, coreValue: "Customer Focus", corePara: "We put our customers at the center of our work." }
    ];

    await CoreValue.insertMany(coreValues);
    console.log('Core values seeded');

    // Unique Values
    const uniqueValues = coreValues.map(value => ({
        ...value,
        showCoreNo: false
    }));

    await UniqueValue.insertMany(uniqueValues);
    console.log('Unique values seeded');

    // Testimonials
    const testimonials = [
        { testimonialPara: "This is the best travel company!", author: "John Doe" },
        { testimonialPara: "Amazing services and great value.", author: "Jane Smith" }
    ];

    await Testimonial.insertMany(testimonials);
    console.log('Testimonials seeded');

    // Offerings
    const offerings = [
        { offeringNo: 1, offeringImg: "https://source.unsplash.com/random/500x500?travel", offeringHeader: "Luxury Tours", offeringDescription: "Experience luxury with our top-tier tours." },
        { offeringNo: 2, offeringImg: "https://source.unsplash.com/random/500x500?adventure", offeringHeader: "Adventure Trips", offeringDescription: "Get your adrenaline pumping with our adventure trips." }
    ];

    await Offering.insertMany(offerings);
    console.log('Offerings seeded');

    mongoose.connection.close();
    console.log('Seeding complete, connection closed');
});
```

### 7. Running the Application

1. **Set Up Environment Variables:** Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   DATABASE_URL=mongodb://localhost:27017/travelCompany
   ```

2. **Seed the Database:**
   ```bash
   node seed.js
   ```

3. **Start the Server:**
   ```bash
   node app.js
   ```

Your backend application should now be up and running, serving the APIs as described.