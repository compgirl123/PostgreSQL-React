// server/db.js
const { Pool } = require('pg');

// Update these values with your PostgreSQL credentials
const pool = new Pool({
    user: 'test',
    host: 'dpg-cukkmuan91rc73asme10-a.oregon-postgres.render.com',
    database: 'test_f99x',
    password: 'eXmq85OVh4sjbbEImdnrg21gXf2Khkg5',
    port: 5432,
    ssl: {
      require: true,           // Instruct node-postgres to use SSL
      rejectUnauthorized: false // Disables strict certificate validation (useful for self-signed certs)
    },
  });
  
  

module.exports = pool;