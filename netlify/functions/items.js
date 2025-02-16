// netlify/functions/items.js

// Adjust the path to your db.js based on your folder structure:
const pool = require('../../server/db');

exports.handler = async (event, context) => {
  try {
    // Run your query here. Adjust the query if your table/column names differ.
    const result = await pool.query('SELECT id, nom FROM items');

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        // Enable CORS if needed:
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(result.rows),
    };
  } catch (err) {
    console.error('Database error:', err);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: 'Failed to fetch items from the database' }),
    };
  }
};
