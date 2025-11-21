const mongoose = require('mongoose');

const chessStatsSchema = new mongoose.Schema({
  // Reference to User
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    bullet: Number,
    blitz: Number,
    rapid: Number,
    classical: Number,
  },
  stats: {
    wins: Number,
    losses: Number,
    draws: Number,
    totalGames: Number,
  },
  achievements: [String], // Array of achievement badges
  recentGames: [
    {
      opponent: String,
      result: String, // 'win', 'loss', 'draw'
      gameType: String, // 'bullet', 'blitz', etc.
      date: Date,
      pgn: String, // Game notation
    },
  ],
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ChessStats', chessStatsSchema);