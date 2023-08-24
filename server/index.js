const http = require("http") ;


// to create a server
const myserver = http.createServer((req,res) => {
    console.log("New Req Rec..") ;
    res.end("hello from server") ;
}) ;

// to listen server
myserver.listen(8000,() => console.log("hey i am listening")) ;