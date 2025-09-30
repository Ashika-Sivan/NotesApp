import express from "express"
//  const express=require('express')
const app=express();

//end point
//end point is a cobination of url and http method that let the user interact with a specific resources


app.get('/api/notes',(req,res)=>{
    //sending notes
    res.status(200).send('you got 10 notes')
    //inorder to kill terminal we use dev
})

app.post('/api/notes',(req,res)=>{
    res.status(201).send()
})

app.listen(5001,()=>{
    console.log(`server running on app http://localhost:${5001}`);
})
