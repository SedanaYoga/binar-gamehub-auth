// Module
const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const { sequelize } = require('./models')
const routes = require('./routes')

//Variable
const PORT = 5000

// App Initialization
const app = express()
dotenv.config()

// Middleware
// --Parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// -- Static Directory Definition
app.use(express.static(path.join(__dirname, 'public')))
// --Third Party Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// View Engine
app.set('view engine', 'ejs')

// Routes
app.use(routes)

// Listen the Server at PORT variable
app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`)
  await sequelize.authenticate()
  console.log('Database Connected!')
})
