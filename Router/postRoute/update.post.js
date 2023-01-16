const express = require('express');
const { PostModel } = require('../../Schema/postSchema');

const updatepost = express.Router();

updatepost.patch("/update/:ID",async(req,res)=>{
    const paylode = req.body
    const ID =  req.params.ID 
    const notes = await PostModel.findOne({_id:ID});
    const notesid = notes.userId
    const myuserid = req.body.userId
    if(notesid==myuserid){
        await PostModel.findByIdAndUpdate({_id:ID},paylode);
        res.send("data has been Updated");
    }else{
        res.send("Please Login First");
    }
   
})


module.exports={
    updatepost
}