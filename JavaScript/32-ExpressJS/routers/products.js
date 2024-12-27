const express = require("express");
const router = express.Router();

const products = [
    {
        id : 1,
        name : "Toshiba Laptop",
        price : 15000,
        stockAmount : 12,
        category : "Bilgisayar"
    },
    {
        id : 2,
        name : "Dell Laptop",
        price : 14000,
        stockAmount : 10,
        category : "Bilgisayar"
    },
    {
        id : 3,
        name : "Casper Desktop",
        price : 10000,
        stockAmount : 7,
        category : "Bilgisayar"
    },
    {
        id : 4,
        name : "Samsung S20",
        price : 13000,
        stockAmount : 17,
        category : "Cep Telefonu"
    },
    {
        id : 5,
        name : "IPhone 15",
        price : 17000,
        stockAmount : 15,
        category : "Cep Telefonu"
    }
];


router.get("/",(req,res) => {
    res.json(products);
})

module.exports = router;