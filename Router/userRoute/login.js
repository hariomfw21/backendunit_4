const express = require("express");
const { UserModel } = require("../../Schema/userSchema");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config()

const login = express.Router();

login.post("/login",async(req,res)=>{
    const {email,password} = req.body
    const data = await UserModel.find({email});
    if(data.length>0){
        bcrypt.compare(password, data[0].password, async(err, result)=> {

            if(result){
                var token = jwt.sign({userId:data[0]._id }, process.env.secret);
                res.send({login:"Sucessful",token:token});
            }else{
                res.send("Please check your password");
            }
        });
    }else{
        res.send("Please Login first");
    }
    
   
   
})


module.exports = {
    login
}