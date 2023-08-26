// npm install express  or npm i express ;
const express = require("express") ;

const app = express() ;

app.get("/", (req,res) => {
    return res.send("hello from HOME page") ;
}) ;

app.get("/about", (req,res) => {
    return res.send(`hey your name is ${req.query.name} and your age is ${req.query.age}`) ;
}) ;

app.listen(8000 , () => console.log("heyy i am listening ") ) ;