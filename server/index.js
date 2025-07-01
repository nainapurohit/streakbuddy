// index.js

import express from "express"; // Import Express library
import cors from "cors"; // Allow frontend to talk to backend
import dotenv from "dotenv"; // Load environment variables from .env
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js"; //importing router?

dotenv.config(); // Actually load those .env variables

const app = express(); // Create an Express application instance
const port = process.env.PORT || 5000; // Use port from .env or default to 5000

// Middleware
app.use(cors()); // Enable CORS for cross-origin requests
app.use(express.json()); // Parse JSON bodies in requests

// Routes :-> any user request will be handled by userRoutes.js
app.use("/api/users", userRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello from StreakBuddy Server!'); // Simple test route
});

//mongodb connection
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
  console.log("✅Connected to MongoDB successfully");

// Start the server
app.listen(port, () => 
  console.log(`Server running on port ${port}`)); // Log when server is running
})

.catch((err)=>{
  console.error("❌Mongodb connection error:",err);
});