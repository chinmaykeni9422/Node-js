const express = require("express") ;
const users = require("./MOCK_DATA.json") ;

const app = express() ;

const PORT = 8000 ;

// ROUTES

app.get('/users' , (req,res) => {

    const html = `
        <ul>
            ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
        </ul>
    ` ;

    res.send(html) ;
}) ;

app.get('/api/users' , (req,res) => {
    //using "res.json()" cuz we are working in json 
    return res.json(users) ;
}) ;


//Dynamic path parameters
//get/api/users/:id 
// : => variable | Dynamic
app.get('/api/users/:id', (req,res) => {
    const id = Number(req.params.id) ;
    const user = users.find((user) => user.id === id) ;
    return res.json(user) ;
}) ;


app.listen(PORT, () => console.log(`Server Started At PORT: ${PORT}`)) ;