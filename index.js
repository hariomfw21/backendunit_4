const express = require("express");
const { connection } = require("./connection/connection");
const { auth } = require("./middlewere/authencation");
const { deletepost } = require("./Router/postRoute/delete.post");
const { getreg } = require("./Router/postRoute/getrouter");
const { postreg } = require("./Router/postRoute/register.post");
const { updatepost } = require("./Router/postRoute/update.post");
const { login } = require("./Router/userRoute/login");
const { register } = require("./Router/userRoute/register");
require('dotenv').config()

const app = express();

app.use(express.json());

app.use("/user",register);
app.use("/user",login);
app.use(auth);
app.use("/post",postreg);
app.use("/post",getreg);
app.use("/post",updatepost);
app.use("/post",deletepost);


app.listen(process.env.port, async () => {
    try {
      await connection
      console.log(`connected to port ${process.env.port}`);
    } catch (Err) {
        console.log(Err);
    }
})