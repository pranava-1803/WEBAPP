const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authController = require('./authController');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static files (if needed for serving static HTML, CSS, JS)
app.use(express.static('public'));

// Routes for registration and login
app.post('/submit_registration', authController.registerUser);
app.post('/submit_login', authController.loginUser);

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database successfully!');
  })
  .catch((err) => {
    console.log('Database connection error: ', err);
  });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
