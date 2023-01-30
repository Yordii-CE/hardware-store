const express = require('express')
const path = require('path')
const mysql = require('mysql')
const myConnection = require('express-myConnection')
const app = express()

//settings
app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//middlewares
app.use(
  myConnection(
    mysql,
    {
      host: 'localhost',
      user: 'root',
      password: 'Yordii',
      port: 3306,
      database: 'hardware_store',
    },
    'single'
  )
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/', require('./routes/home'))
app.use('/', require('./routes/tool'))
app.use('/', require('./routes/accesorie'))
app.use('/', require('./routes/contact'))
app.use('/', require('./routes/register'))
app.use('/', require('./routes/manage-message'))
app.use('/', require('./routes/product'))
app.use('/', require('./routes/sendMessage'))
app.use('/', require('./routes/updateMessage'))
app.use('/', require('./routes/uploadProduct'))
app.use('/', require('./routes/client'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
