const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  // Basic Information
  firstName: {
    type: String,
    required: [true, 'Please provide first name'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Please provide last name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    unique: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email',
    ],
  },

  // Authentication
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
    select: false, // Don't return password by default
  },

  // Profile Information
  avatar: {
    type: String,
    default: 'https://via.placeholder.com/200', // Default avatar URL
  },
  bio: {
    type: String,
    default: 'Full Stack Developer | Chess Enthusiast | Adventurer',
  },
  title: {
    type: String,
    default: 'Full Stack Developer',
  },
  location: String, // e.g., "Nepal"
  phone: String,

  // Social Links
  socialLinks: {
    github: String,      // GitHub username/URL
    linkedin: String,    // LinkedIn URL
    twitter: String,     // Twitter handle/URL
    chess: String,       // Chess.com username
    website: String,     // Personal website
  },

  // Professional Info
  yearsOfExperience: {
    type: Number,
    default: 0,
  },
  currentRole: String,
  company: String,

  // Skills
  skills: [
    {
      name: String,
      category: String, // 'frontend', 'backend', 'devops', 'tools'
      proficiency: {
        type: Number,
        min: 1,
        max: 100,
      },
    },
  ],

  // Adventure Statistics
  adventureStats: {
    countriesVisited: {
      type: Number,
      default: 0,
    },
    peaksClimbed: {
      type: Number,
      default: 0,
    },
    highestPeak: {
      type: Number,
      default: 0,
    },
    totalTrekDays: {
      type: Number,
      default: 0,
    },
  },

  // Chess Statistics (Reference to ChessStats model)
  chessStats: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChessStats',
  },

  // Preferences
  preferences: {
    theme: {
      type: String,
      enum: ['dark', 'light'],
      default: 'dark',
    },
    notifications: {
      type: Boolean,
      default: true,
    },
  },

  // Account Status
  isActive: {
    type: Boolean,
    default: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'admin', // You are the admin of your portfolio
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Method to get public profile (without password)
userSchema.methods.getPublicProfile = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model('User', userSchema);