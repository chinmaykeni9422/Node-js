const express = require("express") ;
const fs = require("fs") ;
const users = require("./MOCK_DATA.json") ;

const app = express() ;
const PORT = 8000 ;


// Middleware -> plugin
app.use(express.urlencoded({extended: false})) ;

//creating a middle ware
app.use((req,res,next) => {
    console.log("hello from middlewaare one") ;
    // return res.json({msg : "hello from middle ware one"}) ;
    next() ;
}) ;

app.use((req,res,next) => {
    console.log("hello from middlewaare two") ;
    next() ;
}) ;


// Routes 
//GET method -------------------------------------------------------------------------------------------------------------

// 1) get all the users
// A) GET/api/users
app.get("/api/users",(req,res) => {
    res.json(users) ;
}) ;
// B) GET/users  (HTML document render)
app.get("/users",(req,res) => {
    const html = `
        <ul>
            ${users.map((users) => `<li>${users.first_name}</li>`).join("")}
        </ul>
    ` ;
    res.send(html) ;
}) ;



//2) get the user according to it's ID
// dynamic path parameters -> here we use ":" (coloun)
//A) GET/api/users/:id 
app.get("/api/users/:id",(req,res) => {
    const id = Number(req.params.id) ;
    const user = users.find((users) => users.id === id) ;
    res.json(user) ;
}) ;
//B) Get/users/:id 
app.get("/users/:id",(req,res) => {
    const id = Number(req.params.id) ;
    const user = users.find((users) => users.id === id) ;
    const html = `
        <ul>
            <li>${user.first_name}</li>
        </ul>
    ` ;
    res.send(html) ;  
}) ;

//-------------------------------------------------------------------------------------------------------------------------


app.post("/api/users",(req,res) => {
    const body = req.body ;  // ->  have the send data
    users.push({...body, id: users.length + 1}) ;
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err,data) => {
        return res.json({status : "pending",id: users.length}) ;
    }) ;
}) ;

app.patch("/api/users/:id",(req,res) => {
    // edit user with id  
    res.json({status : "pending"}) ;
}) ;

app.delete("/api/users/:id",(req,res) => {
    // delete user 
    res.json({status : "pending"}) ;
}) ;



app.listen(PORT, () => console.log(`sever started at ${PORT}`)) ;
