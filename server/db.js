// server/db.js
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.PGUSER || 'etudiants_user',
    host: process.env.PGHOST || 'dpg-d0354q2dbo4c73c9urmg-a.oregon-postgres.render.com',
    database: process.env.PGDATABASE || 'etudiants',
    password: process.env.PGPASSWORD || 'iuSCMtwMKMYlFvUbCqtInQ63LDSujauN',
    port: process.env.PGPORT || 5432,
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
});

module.exports = pool;
