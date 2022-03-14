const mongoose = require('mongoose')
const myShema = mongoose.Schema({
    schoolName:{
        type:String,
        required:[true,'cannot be empty']
    },

    schoolLocation:{
        type:String,
        required:true,
    },
    cloud_id:{
        type:String,
        required:true,
    },
    cloud_url:{
        type:String,
        required:true,
    },
    year:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('user',myShema)