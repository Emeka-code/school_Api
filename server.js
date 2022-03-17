const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT  || 1001
const router = require('./router/router')
require('dotenv').config()


const app = express()
const url = process.env.MONGODB_ATLAS
mongoose.connect(url).then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.log(error.message)
})
app.use(express.json())
app.use('/api',router)

app.listen(port,()=>{
    console.log('app is listening to port' + port)
})