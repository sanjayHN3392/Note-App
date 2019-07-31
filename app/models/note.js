const mongoose=require('mongoose')

//Schema-object constructor function
const Schema=mongoose.Schema

const NoteSchema=new Schema({
    title:{
        type: String,
        required:true
        
    },
    body:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    }
})

//model based on schema 

const Note=mongoose.model("Note",NoteSchema)

module.exports=Note