const Adventure = require('../models/Adventure');

exports.getAllAdventures = async (req, res) => {
  try {
    const adventures = await Adventure.find().sort({ startDate: -1 });
    res.status(200).json({
      success: true,
      count: adventures.length,
      data: adventures,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAdventure = async (req, res) => {
  try {
    const adventure = await Adventure.findById(req.params.id);
    
    if (!adventure) {
      return res.status(404).json({
        success: false,
        message: 'Adventure not found',
      });
    }

    res.status(200).json({
      success: true,
      data: adventure,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createAdventure = async (req, res) => {
  try {
    const adventure = await Adventure.create(req.body);
    res.status(201).json({
      success: true,
      data: adventure,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getFeaturedAdventures = async (req, res) => {
  try {
    const adventures = await Adventure.find({ isFeatured: true }).limit(6);
    res.status(200).json({
      success: true,
      data: adventures,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAdventuresByCountry = async (req, res) => {
  try {
    const { country } = req.params;
    const adventures = await Adventure.find({ country });
    res.status(200).json({
      success: true,
      data: adventures,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};