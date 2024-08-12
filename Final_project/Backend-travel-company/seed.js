require("dotenv").config();
const mongoose = require("mongoose");
const CoreValue = require("./models/coreValue");
const UniqueValue = require("./models/uniqueValue");
const Testimonial = require("./models/testimonial");
const Offering = require("./models/offering");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  console.log("Connected to MongoDB for seeding");

  // Core Values
  const coreValues = [
    {
      coreNo: 1,
      coreValue: "Excellence",
      corePara: "We strive for excellence in everything we do.",
    },
    {
      coreNo: 2,
      coreValue: "Customer Focus",
      corePara: "We put our customers at the center of our work.",
    },
    {
      coreNo: 3,
      coreValue: "Integrity",
      corePara:
        "We maintain the highest standards of integrity in all our actions.",
    },
  ];

  await CoreValue.insertMany(coreValues);
  console.log("Core values seeded");

  // Unique Values
  const uniqueValues = coreValues.map((value) => ({
    ...value,
    showCoreNo: false,
  }));

  await UniqueValue.insertMany(uniqueValues);
  console.log("Unique values seeded");

  // Testimonials
  const testimonials = [
    {
      testimonialPara:
        "This is the best travel company! Your customer might have to keep their testimonial broad, which may make it less impactful for specific segments that really need a nudge to purchase.",
      author: "John Doe",
    },
    {
      testimonialPara:
        "Amazing services and great value. Your customer might have to keep their testimonial broad, which may make it less impactful for specific segments that really need a nudge to purchase.",
      author: "Jane Smith",
    },
    {
      testimonialPara:
        "Unforgettable experiences every time. Your customer might have to keep their testimonial broad, which may make it less impactful for specific segments that really need a nudge to purchase.",
      author: "Michael Johnson",
    },
  ];

  await Testimonial.insertMany(testimonials);
  console.log("Testimonials seeded");

  // Offerings
  const offerings = [
    {
      offeringNo: 1,
      offeringImg: "https://source.unsplash.com/random/500x500?travel",
      offeringHeader: "Luxury Tours",
      offeringDescription: "Experience luxury with our top-tier tours.",
    },
    {
      offeringNo: 2,
      offeringImg: "https://source.unsplash.com/random/500x500?adventure",
      offeringHeader: "Adventure Trips",
      offeringDescription:
        "Get your adrenaline pumping with our adventure trips.",
    },
    {
      offeringNo: 3,
      offeringImg: "https://source.unsplash.com/random/500x500?beach",
      offeringHeader: "Beach Getaways",
      offeringDescription: "Relax and unwind with our beach getaway packages.",
    },
    {
      offeringNo: 4,
      offeringImg: "https://source.unsplash.com/random/500x500?culture",
      offeringHeader: "Cultural Experiences",
      offeringDescription:
        "Immerse yourself in the rich cultures of the world with our curated experiences.",
    },
  ];

  await Offering.insertMany(offerings);
  console.log("Offerings seeded");

  mongoose.connection.close();
  console.log("Seeding complete, connection closed");
});
