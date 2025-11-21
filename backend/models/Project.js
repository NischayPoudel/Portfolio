const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a project title'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide a description'],
  },
  shortDescription: String,
  images: [String], // Array of image URLs
  heroImage: String,
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Intermediate',
  },
  category: [String], // ['Full Stack', 'Frontend', 'Backend', etc.]
  technologies: [String], // ['React', 'MongoDB', 'Node.js', etc.]
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 4,
  },
  liveLink: String,
  githubLink: String,
  duration: String, // "3 months", "2 weeks"
  startDate: Date,
  endDate: Date,
  keyFeatures: [String],
  lessons: [String], // What I learned
  featured: {
    type: Boolean,
    default: false,
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Project', projectSchema);