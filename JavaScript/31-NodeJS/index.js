// console.log("Merhaba NodeJS")

// const number1 = 5;
// const number2 = 7;
// console.log("Number1 : ", number1);
// console.log("Number2 : ", number2);
// console.log("Total : ", number1 + number2);

const express = require("express");
const port = 8080;

const products = [
    {id:1, name:"Casper Laptop",price : 15000,stock : 7},
    {id:2, name:"HP Desktop",price : 10000,stock : 5},
    {id:3, name:"Samsung S20",price : 17000,stock : 13},
    {id:4, name:"IPhone 13",price : 19000,stock : 8}
]

const categories = [
    {id:1, name:"Bilgisayar"},
    {id:2, name:"Cep Telefonu"}
]

const users = [
    {id:1,firstname : "Akın", lastname : "Cengiz", username : "akincengiz"},
    {id:1,firstname : "Hüseyin", lastname : "Çiçek", username : "huseyincicek"},
    {id:1,firstname : "Betül", lastname : "Aktoprak", username : "betulaktoprak"},
    {id:1,firstname : "Simay", lastname : "Seyman", username : "simayseyman"}
]

const app = express();

//GET Products
app.get("/products",(req,res) => {
    res.json(products);
})

//GET CATEGORIES
app.get("/categories",(req,res) => {
    res.json(categories);
})

app.get("/users",(req,res) => {
    res.json(users);
})

app.listen(port,() => {
    console.log(`Server ${port} numaralı port üzerinden yayında...`);
})