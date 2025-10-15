import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv"
dotenv.config()

// console.log(process.env.MONGO_URI)
const PORT=process.env.PORT||5001
//  const express=require('express')
const app=express();
connectDB()

//middleware
app.use(express.json())//this one access to the req.body,after we send the res back,which access to the req.body
app.use((req,res,next)=>{
    console.log(`req method is ${req.method} & Req url is ${req.url}`)
    next()
})

app.use("/api/notes",notesRoutes)
app.listen(PORT,()=>{
    console.log(`server running on app http://localhost:${PORT}`);
})
































// app.use("/api/notes",notesRoutes)
// app.use("/api/notes",notesRoutes)



//end point
//end point is a cobination of url and http method that let the user interact with a specific resources


