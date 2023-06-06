// Import express-async-handler from express-async-handler
const asyncHandler = require('express-async-handler');
// Import the Hit model
const HitModel = require('../models/hitModel');

// @desc   Get all hits
// @route  GET /api/hit
// @access Public
const getHits = asyncHandler(async (req, res) => {
  try {
    // Get all hits from the database
    const hits = await HitModel.find({});
    res.status(200).json(hits);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get hits' });
  }
});

// Export the routes
module.exports = { getHits };
