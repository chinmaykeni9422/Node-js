const fs = require("fs") ;


//--------write---------

// ...Sync(blocking)
// fs.writeFileSync("./text.txt","hey chinmay how are you") ;

// ...Async(non blocking)
// fs.writeFile("./text.txt","this is Async write",(error)=>{}) ;


//---------read---------

// ...Sync // we can store file content in varialble

// const result = fs.readFileSync("./contact.txt","utf-8") ;
// console.log(result) ;



//...Async // we can not store file content in varialble here we use call back functio

// fs.readFile("./contact.txt","utf-8",(error,result)=>{
//     if(error){
//         console.log("error -> ",error) ;
//     }
//     else{
//         console.log(result) ;
//     }
// }) ;



// append file sync (ye data ko overide nahi karta ye data ko add karta he)
// always pass data in string
// const n = "chinmay"
// fs.appendFileSync("./contact.txt",n) ;
// fs.appendFileSync("./contact.txt",new Date().getDate().toLocaleString()) ;



// copy function
// fs.cpSync("./contact.txt","./copy.txt") ; // it will generate new file name "copy.txt" and copy all the content of "contact.txt" into that file


//to delete the file
// fs.unlinkSync("./copy.txt") ;

//to check the status of file
// const stat = fs.statSync("./contact.txt") ;
// console.log(stat) ;


// isFile() is to check whether it is file or not -> returns boolean value 
// const s = fs.statSync("./contact.txt").isFile() ;
// console.log(s) ;



// THERE ARE MANY MORE FUNCTIONSSS