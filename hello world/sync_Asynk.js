const fs = require("fs") ;

// synchronus (blocking) 
// console.log(1) ;

// const result = fs.readFileSync("./text.txt","utf-8") ;
// console.log(result) ;

// console.log(2) ;

//---------------------------------------------------------------------------------------------------------------------

// Asynchronus (non blocking) 
// console.log(1) ;

// fs.readFile("./text.txt","utf-8",(error,result)=>{
//     if(error){
//         console.log("error -> " , error) ;
//     }
//     else{
//         console.log(result) ;
//     }
// });

// console.log(2) ;