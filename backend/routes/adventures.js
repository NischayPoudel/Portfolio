const express = require('express');
const {
  getAllAdventures,
  getAdventure,
  createAdventure,
  getFeaturedAdventures,
  getAdventuresByCountry,
} = require('../controllers/adventureController');

const router = express.Router();

// Public routes
router.get('/', getAllAdventures);
router.get('/featured', getFeaturedAdventures);
router.get('/country/:country', getAdventuresByCountry);
router.get('/:id', getAdventure);

// Admin routes
router.post('/', createAdventure);

module.exports = router;