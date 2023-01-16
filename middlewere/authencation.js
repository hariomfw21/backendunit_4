const jwt = require("jsonwebtoken");
require('dotenv').config()

const auth = (req,res,next)=>{
    const token = req.headers.authorization

    if(token){
        const decoded = jwt.verify(token,process.env.secret);
        if(decoded){
           const userId = decoded.userId;
           req.body.userId = userId
           next();
        }else{
            res.send("data not verify-t");
        }
    }else{
        res.send("token must be provide");
    }
}

module.exports = {
    auth
}
