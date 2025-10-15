import mongoose from 'mongoose'
const noteSchema=new mongoose.Schema(
  {
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
  },
    {timestamps:true}//createdAt,udatedAt
)

 const Note=mongoose.model('Note',noteSchema)
 export default Note












//1st step:you need to create schema
//2nd step:create a model based of that schema