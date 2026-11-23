// config/db.js
const mysql = require('mysql');

// createPool keeps a small group of connections ready to use
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '', // Enter your local MySQL password if you have one
  database: 'stretch_armstrong_db'
});

module.exports = pool;
