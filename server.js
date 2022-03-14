const express = require('express')
const mongoose = require('mongoose')
const port = 1001
const router = require('./router/router')


const app = express()
const url = 'mongodb://localhost/schoolApi'
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