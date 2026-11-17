// Import Express and create a router for workout requests
const express = require('express')
const router = express.Router()
const cors = require('cors')

// Set browser access rules for the frontend
const corsRules = {
  origin: "*"
}

// SQL database connection (PBI 6)
// Will be enabled once the database is ready
// const databaseSettings = require('../db.js')
// const mysql = require('mysql')
// const sql = mysql.createConnection(databaseSettings.conn_info)
// sql.connect()

// GET: Retrieve workout information from the SQL database
// and return the results to the frontend
router.get('/workout_address', cors(corsRules), function(req, res, next) {

  sql.query('enter sql query here', (err, r, f) => {

    if (!err) {
      res.json(r)
    }
    else {
      next(err)
    }

  })

})

// POST: Receive completed workout information from the frontend
// and save it to the SQL database
router.post('/finished_workout_address', cors(corsRules), function(req, res, next) {

  sql.query('enter sql query here', (err, r, f) => {

    if (!err) {
      res.json(r)
    }
    else {
      next(err)
    }

  })

})

// Export the router for use in the main Express application
module.exports = router
