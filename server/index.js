// index.js

const express = require('express'); // Import Express library
const cors = require('cors'); // Allow frontend to talk to backend
const dotenv = require('dotenv'); // Load environment variables from .env

dotenv.config(); // Actually load those .env variables

const app = express(); // Create an Express application instance
const port = process.env.PORT || 5000; // Use port from .env or default to 5000

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON bodies in requests

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello from StreakBuddy Server!'); // Simple test route
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Log when server is running
});