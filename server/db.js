// server/db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PGUSER || 'test',
    host: process.env.PGHOST || 'dpg-cukkmuan91rc73asme10-a.oregon-postgres.render.com',
    database: process.env.PGDATABASE || 'test_f99x',
    password: process.env.PGPASSWORD || 'eXmq85OVh4sjbbEImdnrg21gXf2Khkg5',
    port: process.env.PGPORT || 5432,
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
});

module.exports = pool;
