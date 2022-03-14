const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./upload")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
});

const fileFilter = (req,file,cb)=>{
    const ext = path.extname(file.originalname)

    if(ext!=='.jpg' || ext!=='.jpeg' || ext!=='.png'){
        cb(null,new Error('file format not supported'),false)
    }else{
        cb(null,true)
    }
}

const imageuploader= multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024 * 1024 * 5
    }
}).single('image')

module.exports = imageuploader;