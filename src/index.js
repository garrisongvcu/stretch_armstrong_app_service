const { pool } = require('./server/config/db');

app.get('/api/health-db', (req, res) => {
  pool.query('SELECT 1 AS healthy', (err, results) => {
    if (err) {
      return res.status(500).json({
        status: 'error',
        database: 'disconnected',
        error: err.message
      });
    }

    return res.status(200).json({
      status: 'ok',
      database: 'connected',
      result: results
    });
  });
});
