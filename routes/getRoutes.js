const express = require('express'); // Express web server framework
const router = express.Router(); // Create a new Express router
// Bring in the routes
const { getHits } = require('../controllers/getController');

// Create a get route
router.get('/', getHits);

// Export the router
module.exports = router;
