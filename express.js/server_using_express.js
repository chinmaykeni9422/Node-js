// npm install express  or npm i express
const http = require("http") ;
const express = require("express") ;

const app = express() ;

app.get("/", (req,res) => {
    return res.send("hello from HOME page") ;
}) ;

app.get("/about", (req,res) => {
    return res.send("i am chinmay") ;
}) ;

const myServer = http.createServer(app) ;

app.listen(8000, () => console.log("i am listening")) ;