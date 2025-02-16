// netlify/functions/items.js

// Adjust the path to your db.js based on your folder structure:
const pool = require('../../server/db');

exports.handler = async (event, context) => {
  try {
    console.log("Connecting to database to fetch items...");
    // Execute the query; adjust the table name or column names as necessary.
    const result = await pool.query('SELECT id, nom FROM items');
    
    console.log("Query successful. Items:", result.rows);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // CORS header to allow all origins
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
