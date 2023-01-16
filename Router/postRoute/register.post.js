const express = require("express");


const { PostModel } = require("../../Schema/postSchema");

const postreg = express.Router();

postreg.post("/",async(req,res)=>{
    try{
        const data = new PostModel(req.body);
        await data.save();
        res.send(await PostModel.find());

    }catch(err){
        console.log(err);
    }
})


module.exports = {
    postreg
}