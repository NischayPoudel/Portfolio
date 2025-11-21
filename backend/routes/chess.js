const express = require('express');
const { getChessStats } = require('../controllers/chessController');

const router = express.Router();

router.get('/:username', getChessStats);

module.exports = router;