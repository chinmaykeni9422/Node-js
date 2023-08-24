const http = require("http") ;
const fs = require("fs") ;


// to create a server
const myserver = http.createServer((req,res) => {
    const log = `${Date.now()}: ${req.url} new request received\n` ;
    fs.appendFile('file.txt',log,(err,data) =>{
        switch (req.url) {
            case "/": res.end("Home") ;
                break;
            case "/about": res.end("i am chinmay") ;
                break;
            default: res.end("404 not found") ;
                break;
        }
    }) ;
}) ;

// to listen server
myserver.listen(8000,() => console.log("hey i am listening")) ;