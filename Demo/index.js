//! Dependencies -------

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
const config = require('./Config/database')

//!----------------------

//? Start server --------

mongoose.connect(config.database)

mongoose.connection.on('connected',()=>{
    console.log('connected to database ' + config.database)
} )

mongoose.connection.on('error',(err)=>{
    console.log('ERROR IS ' + err)
} )

const app = express()
const port = 3000

const users = require('./routs/users')

//? Middleware

app.use(cors()) 
app.use(bodyParser.json())
app.use('/users' , users)
app.use(express.static(path.join('/Frontend')))


app.get('/',(req,res)=>{
    res.send('Invalid')
})

app.listen(port ,() =>{
    console.log('server is on port '+ port)
})