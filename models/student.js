const mongoose=require('mongoose')

const Student = new mongoose.Schema({
    name: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    class:{type:String,required:true},
    rollno:{type:String,required:true},
    country_origin:{ type: mongoose.Schema.Types.ObjectId, ref: 'Country' },
    subjectList: {type:Array},
},
{ timestamps : true }
);
module.exports = mongoose.model('Student', Student);