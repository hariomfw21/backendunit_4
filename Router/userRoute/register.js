const express = require("express");
const { UserModel } = require("../../Schema/userSchema");
const bcrypt = require('bcrypt');

const register = express.Router();

register.post("/register",async(req,res)=>{
    const {name,email,gender,password} = req.body
    try{
        bcrypt.hash(password, 5, async(err, hash)=> {
            const data = new UserModel({name,email,gender,password:hash});
            await data.save();
            res.send(await UserModel.find());
        })
        
    }catch(err){
      console.log(err);
    }
   
   
})


module.exports = {
    register
}