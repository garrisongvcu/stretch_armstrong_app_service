const mysql = require('mysql2');

// Connection details for local MySQL development (port 3306 by default)
const conInfo = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'stretch_armstrong_db'
};

// Create a reusable connection pool for Express routes
const pool = mysql.createPool(conInfo);

module.exports = {
  conInfo,
  pool
};
