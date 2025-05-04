// server/index.js
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to check server time
app.get('/api', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ now: result.rows[0].now });
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).json({ error: err.message || 'Server error' });
  }
});

// New endpoint to fetch items from the "items" table
app.get('/api/students', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM students');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching items:', err);
    res.status(500).json({ error: err.message || 'Server error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
