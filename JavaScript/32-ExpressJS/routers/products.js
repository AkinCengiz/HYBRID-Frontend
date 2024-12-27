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
        id : 9,
        name : "IPhone 15",
        price : 17000,
        stockAmount : 15,
        category : "Cep Telefonu"
    }
];


router.get("/",(req,res) => {
    res.json(products);
});

router.post("/",(req,res) => {
    const id = products[products.length-1].id + 1;
    products.push({id:id,...req.body})
    // products.push(req.body);
    res.status(201).json(products);
});

router.put("/:id",(req,res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < products.length; i++){
        if(products[i].id === id){
            products[i] = {
                ...products[i],
                ...req.body
            }
            res.json(products[i]);
        }
    }
    //res.json(products);

});

router.delete("/:id",(req,res) => {
    const id = parseInt(req.params.id);
    for(let i = 0; i < products.length;i++){
        if(products[i].id === id){
            products.splice(i,1);
        }
    }
    res.status(200).json(products);
})

module.exports = router;