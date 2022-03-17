const model = require('../model/model')
const cloudinary = require('../cloudinary/cloudinary')
const fs = require('fs')


const createSchool = async (req,res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        const school = await model.create ({
            schoolName:req.body.schoolName,
            schoolLocation:req.body.schoolLocation,
            image:req.file.path,
            year:req.body.year,
            cloud_id:result.public_id,
            cloud_url:result.secure_url
        })
        res.status(201).json({
            status:'created successfully',
            data:school
        })
    }catch(error){
        console.log(error)
    }
}

const getallSchool = async(req,res)=>{
    try{
        const allSchool = await model.find()
        res.status(200).json({
            status:'successful',
            data:allSchool
        })
    }catch(error){
        console.log(error)
    }
}



const getSchool = async(req,res) =>{
    try{
        const id = req.params.id
        const oneSchool = await model.findById(id)
        res.status(201).json({
            status:"successfully",
            data:oneSchool
        })
    }catch(error){
        console.log(error)
    }
}
const updateSchool = async (req,res)=>{
    try {
        const cloud = await cloudinary.uploader.upload(req.file.path);
        const update = await model.findByIdAndUpdate(req.params.id,{
            schoolName:req.body.schoolName,
            schoolLocation:req.body.schoolLocation,
            image:req.file.path,
            year:req.body.year,
            cloud_id:cloud.public_id,
            cloud_url:cloud.secure_url
        },{new:true})
        res.status(201).json({
            status:'updated successfully',
            data:update
        })
    } catch (error) {
        console.log(error)
    }
}
const deleteSchool  = async(req,res)=>{
    try {
        const id = req.params.id
        const blog = await model.findById(id)
        await cloudinary.uploader.destroy(blog.cloud_id)
        await fs.unlinkSync(blog.image)
        await model.findByIdAndRemove(id)
        res.status(204).json({
            status:'deleted successfully',
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    createSchool,
    getallSchool,
    getSchool,
    updateSchool,
    deleteSchool
}