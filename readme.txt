require('dotenv').config()


{
    "_id": "63c51976cff1c6a7ca59ec44",
    "name": "Sohan",
    "email": "Sohan@gmail.com",
    "gender": "Male",
    "password": "$2b$05$BorUpKiWVSIjdvTYQZxbguSqZclgLUG0tr8GlAC1lRjgsavXpbLwy"
  }


{
  "name": "Sohan",
  "email": "Sohan@gmail.com",
  "gender": "Male",
  "password": "sohan"
}



const express = require("express");
const { PostModel } = require("../../Schema/postSchema");


const updatenotes = express.Router();

updatenotes.patch("/:Id",async(req,res)=>{
    // const Id = req.params.Id;
    // await PostModel.find 
    // const paylode = req.body
    // const notes = await PostModel.findOne({_id:Id});
    // const myuserid = req.body.userId
    try{
     await PostModel.find
    }catch(err){
        console.log(err);
    }
})


module.exports = {
    updatenotes
}


[
  {
    "_id": "63c51f45d246e606c5f67149",
    "title": "My first Note",
    "body": "working in post register",
    "device": "Laptop",
    "userId": "63c51976cff1c6a7ca59ec44"
  },
  {
    "_id": "63c51fc2d246e606c5f6714c",
    "title": "Prerna's Notes",
    "body": "working in progress",
    "device": "Mobile",
    "userId": "63c51976cff1c6a7ca59ec44"
  },
  {
    "_id": "63c51fe1d246e606c5f6714f",
    "title": "Mohit's Notes",
    "body": "working in progress",
    "device": "Tablet",
    "userId": "63c51976cff1c6a7ca59ec44"
  }
]