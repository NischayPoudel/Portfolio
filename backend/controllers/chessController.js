const axios = require('axios');
const ChessStats = require('../models/ChessStats');

exports.getChessStats = async (req, res) => {
  try {
    const { username } = req.params;
    
    // Fetch from chess.com API
    const response = await axios.get(
      `https://api.chess.com/pub/player/${username}`
    );

    const stats = await ChessStats.findOneAndUpdate(
      { username },
      {
        username,
        rating: {
          bullet: response.data.stats?.chess_bullet?.last?.rating || 0,
          blitz: response.data.stats?.chess_blitz?.last?.rating || 0,
          rapid: response.data.stats?.chess_rapid?.last?.rating || 0,
          classical: response.data.stats?.chess_classical?.last?.rating || 0,
        },
        lastUpdated: new Date(),
      },
      { upsert: true, new: true }
    );

    res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};