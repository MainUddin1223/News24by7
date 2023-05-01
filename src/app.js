const express = require('express') ;
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./routes')
require('dotenv').config();
const app = express()
app.use(errorHandler);
app.use(cors())
app.use('/',routes)

  
module.exports = app