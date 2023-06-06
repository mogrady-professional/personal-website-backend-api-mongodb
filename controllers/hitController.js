// Import express-async-handler from express-async-handler
const asyncHandler = require('express-async-handler');
// Import the Hit model
const VisitorModel = require('../models/VisitorModel');
const HitModel = require('../models/hitModel');

// This logs all visitor data to the database

// @desc   Create a new hit
// @route  POST /api/hit
// @access Public
const logVisitorData = asyncHandler(async (req, res) => {
  try {
    // Extract the data from the request body
    const hitData = req.body;

    // Create a new instance of the VisitorModel
    const newHit = new VisitorModel(hitData);

    // Save the new hit document to the database
    const savedHit = await newHit.save();

    res.status(201).json({
      message: 'Hit created successfully',
      hit: savedHit,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create hit' });
  }
});

// @desc   Create a new hit
// @route  POST /api/hit/hit
// @access Public
const createHit = asyncHandler(async (req, res) => {
  try {
    let logHit = await HitModel.findOne();
    if (!logHit) {
      logHit = new HitModel();
    }
    await logHit.incrementCount();
    res.status(200).json(logHit);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create hit' });
  }
});

// Export the routes
module.exports = { logVisitorData, createHit };
