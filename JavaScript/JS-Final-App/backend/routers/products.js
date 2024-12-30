const express = require("express");
const router = express.Router();
const Product = require("../model/Product");

const cities = ["İstanbul","Ankara","İzmir"];


//CREATE PRODUCT
router.post("/", async (req,res) => {
    try {
        
        // const { name , price, description, stock} = req.body;
        // const product = new Product(req.body);
        // res.json(a);

        //res.json({name,price, description, stock});

        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error : "Sunucu hatası"});
    }
})


//GET PRODUCTS

router.get("/",async(req,res) => {
    try {
        const products = await Product.find();//find metodu tablodaki verileri getirir...
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//GETBYID PRODUCT
router.get("/:productId",async (req,res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId)
        if(!product){
            return res.status(404).json({error : "Ürün bulunamadı..."});
        }
        res.status(200).json(product);
    } catch (error) {
        //res.send(error);
        res.status(500).json({ error : "Sunucu hatası..."});
    }
})

//UPDATE PRODUCT
router.put("/",async(req,res) => {
    try {
        const updatedProduct = req.body;
        const product = await Product.findById(updatedProduct._id);
        if(!product){
            return res.status(404).json({error : "Ürün bulunamadı..."});
        }

        const newProduct = await Product.findByIdAndUpdate(updatedProduct._id,updatedProduct,{ new: true, runValidators: true });
        res.status(200).json(newProduct);

    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."})
    }
})

module.exports = router;