const express = require('express')
const router = express.Router()

router.get('/register' ,(req,res,next) =>{
    res.send("Welcome to regester")
})

router.get('/authenticate' ,(req,res,next) =>{
    res.send("Welcome to Authenticate")
})

router.get('/profile' ,(req,res,next) =>{
    res.send("Welcome to Profile")
})


module.exports = router