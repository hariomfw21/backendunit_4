const express = require('express');
const { PostModel } = require('../../Schema/postSchema');

const deletepost = express.Router();

deletepost.delete("/delete/:ID",async(req,res)=>{
    const paylode = req.body
    const ID =  req.params.ID 
    const notes = await PostModel.findOne({_id:ID});
    const notesid = notes.userId
    const myuserid = req.body.userId
    if(notesid==myuserid){
        await PostModel.findByIdAndDelete({_id:ID});
        res.send("data has been Delete");
    }else{
        res.send("You are not authorize");
    }
   
})


module.exports={
    deletepost
}