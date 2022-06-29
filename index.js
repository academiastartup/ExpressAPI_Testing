/*
* EXPRESS CONFIGURATION A COURTESY OF https://robkendal.co.uk/blog/how-to-build-a-restful-node-js-api-server-using-json-files
*/

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fs = require('fs')
const port = 3000
const cors = require('cors')

// express configurations
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))


// this is where we'll handle our various routes from
const routes = require('./routes/routes.js')(app, fs)

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})