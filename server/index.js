const http = require("http") ;
const fs = require("fs") ;
const url = require("url") ;

//url


// to create a server
const myserver = http.createServer((req,res) => {
    if(req.url === "/favicon.ico")return res.end() ;
    const log = `${Date.now()}: ${req.url} new request received\n` ;
    const myurl = url.parse(req.url,true) ;
    console.log(myurl) ;
    fs.appendFile('file.txt',log,(err,data) =>{
        switch (myurl.pathname) {
            case "/": res.end("Home") ;
                break;
            case "/about": const qp = res.end("i am chinmay") ;
                break;
            default: res.end("404 not found") ;
                break;
        }
    }) ;
}) ;

// to listen server
myserver.listen(8000,() => console.log("hey i am listening")) ;