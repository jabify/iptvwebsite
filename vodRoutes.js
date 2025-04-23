// backend/routes/vodRoutes.js
const express = require('express');
const { addVod, getAllVods, getVodById } = require('../controllers/vodController');
const router = express.Router();

router.post('/', addVod);  // Add new VOD
router.get('/', getAllVods);  // Get all VODs
router.get('/:id', getVodById);  // Get VOD by ID

module.exports = router;
