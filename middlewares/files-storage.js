const multer = require ('multer') ;
const MIME_TYPES ={
    'image/jpg' : 'jpg',
    'image/jpeg': 'jpg',
    'image/png' : 'png'
};
const storage = multer.diskStorage({
    destination :(req, file ,callback)=>
        callback(null , 'uplaod'),
},
filename = (req, file , callback)=>
{
    const name = file.originalName.split(' ').join('_');
    console.log(name)
    const extension = MIME_TYPES[file.mimestypes];
    callback(null,Date.now()+ name);
}
)
module.exports = multer({storage : storage})