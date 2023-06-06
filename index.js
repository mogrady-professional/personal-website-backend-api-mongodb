const express = require('express'); // Express web server framework
const colors = require('colors'); // For pretty console output
const dotenv = require('dotenv').config(); // Load environment variables from .env file
const cors = require('cors'); // CORS middleware
// Bring in Error Handler Middleware
const { errorHandler } = require('./middleware/errorMiddleware');
// Bring in Connection to MongoDB
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000; // Port to listen on
// Connect to MongoDB
connectDB();
const app = express(); // Create a new Express application
app.use(express.json()); // Parse request body as JSON
app.use(cors());

// Create a route with express
app.get('/', (req, res) => {
  // Log the request to the console
  res.status(200).json({
    message: 'Welcome to the API for the Hit Counter!',
  });
});

app.get('/api/', (req, res) => {
  // Log the request to the console
  res.status(200).json({
    messate: 'Welcome to the API Root!',
  });
});

// Test Route
// app.post('/test', (req, res) => {
//   console.log('req.body', req.body);
//   res.json(req.body);
// });

/* Send a GET request using Postman to test the server
http://localhost:5005/
*/

// Pass to routes
app.use('/api/hit', require('./routes/hitRoutes'));
app.use('/api/get', require('./routes/getRoutes'));

/* Send a request using Postman to test the request
http://localhost:5005/
*/

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Retrieve the NODE_ENV value
const nodeEnv = process.env.NODE_ENV;

// Determine the environment based on NODE_ENV value
const isProduction = nodeEnv === 'production';
const isLocal = nodeEnv === 'development';

// Example usage
if (isProduction) {
  console.log('Running in production environment');
} else if (isLocal) {
  console.log('Running in local environment');
} else {
  console.log('Unknown environment');
}
