const mongoose = require ('mongoose');
const fileschema = mongoose.Schema({
    name : {type : string ,required:true},
    description :{type : string , required :true},
    fileUrl :{type : string ,required:true},
    userId:{type : string ,required:true}
})

module.exports = mongoose.model('file', fileSchema);