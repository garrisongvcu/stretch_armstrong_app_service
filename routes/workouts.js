// Import Express and create a router for API request
const express = require('express')
const router = express.Router()
const cors = require('cors')

// Set browser access rules for the frontend
const corsRules = {
  origin: "*"
}

// SQL database connection (PBI 6)
// const database = require('../db.js')
// const mysql = require('mysql')
// const sql = mysql.createConnection(database.conn_info)
// sql.connect()

// GET: Get workout info from SQL then push it to the front end
router.get('/workout_address', cors(corsRules), function(req, res, next) {

  sql.query('enter sql query here', (e, r, f) => {

    if (!e) {
      res.json(r)
    }
    else {
      next(e)
    }

  })

})

// POST: Receive finished workout information from the frontend and save it to SQL
router.post('/finished_workout_address', cors(corsRules), function(req, res, next) {

  sql.query('enter sql query here', (e, r, f) => {

    if (!e) {
      res.json(r)
    }
    else {
      next(e)
    }

  })

})

// Export the router for use in the main Express application
module.exports = router
