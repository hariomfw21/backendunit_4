const express = require("express");


const { PostModel } = require("../../Schema/postSchema");


const getreg = express.Router();

getreg.get("/",async(req,res)=>{
    const {userId} = req.body;
    const data = await PostModel.find({userId:userId});
    res.send(data);
})

getreg.get("/getbyquery",async(req,res)=>{
    const {userId} = req.body;
    const device = req.query.device
    const data = await PostModel.find({device:device});
    res.send(data);
})

getreg.get("/getbyquery",async(req,res)=>{
    const {userId} = req.body;
    const device = req.query.device
    const data = await PostModel.find({device:device});
    res.send(data);
})

getreg.get("/getbyandq",async(req,res)=>{
    const {userId} = req.body;
    const device = req.query.device;
    const device2 = req.query.device2;
     const data = []
     data.push(await PostModel.find({device:device}))
     data.push(await PostModel.find({device:device2}))
     res.send(data);
     console.log(data);
})





module.exports = {
    getreg
}