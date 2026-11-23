// server.js
const express = require('express');
const app = express();
const db = require('./config/db'); // import our helper

// Test route to verify the database responds
app.get('/api/health-db', (req, res) => {
  // Simple check: asking MySQL to calculate 1 + 1
  db.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
      console.error('Database connection failed:', err);
      return res.status(500).json({
        status: 'error',
        message: 'Database connection failed',
        error: err.message
      });
    }

    // Success! Send back confirmation
    res.status(200).json({
      status: 'success',
      message: 'Database connected successfully',
      solution: results[0].solution
    });
  });
});
