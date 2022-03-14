const express = require ('express')
const route = express.Router()
const{createSchool, getallSchool, getSchool, updateSchool, deleteSchool} = require('../controller/control')
const imageuploader = require ('../multer/multer')

route.post('/create',imageuploader,createSchool)
route.get('/get',getallSchool)
route.get('/get/:id',getSchool)
route.patch('/patch/:id',updateSchool)
route.delete('/delete/:id',deleteSchool)

module.exports = route