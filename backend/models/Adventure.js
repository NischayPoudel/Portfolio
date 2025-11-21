const mongoose = require('mongoose');

const adventureSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide adventure title'],
    trim: true,
  },
  type: {
    type: String,
    enum: ['trek', 'hike', 'travel', 'adventure'],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: String,
  coordinates: {
    lat: Number,
    lng: Number,
  },
  description: String,
  images: [String],
  difficulty: {
    type: Number,
    min: 1,
    max: 5,
    default: 3,
  },
  distance: Number, // in km
  elevation: Number, // in meters
  duration: String, // "5 days", "2 weeks"
  startDate: Date,
  endDate: Date,
  highlights: [String],
  lessons: [String], // What I learned
  weather: String,
  bestSeason: String,
  people: [String], // Who I went with
  isFeatured: {
    type: Boolean,
    default: false,
  },
  galleryPhotos: {
    count: Number,
    urls: [String],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Adventure', adventureSchema);