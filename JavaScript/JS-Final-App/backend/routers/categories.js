const express = require("express");
const router = express.Router();
const Category = require("../model/Category.js");


//CREATE CATEGORY
router.post("/",async (req,res) => {
    try {
        const { name, description } = req.body;

        const category = new Category({name,description});
        //console.log(category);

        await category.save();

        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."})
    }
})

//GET CATEGORIES
router.get("/", async (req,res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

//UPDATE CATEGORY 

router.put("/:id",async (req,res) => {
    try {
        const id = req.params.id;
        const updatedInfo = req.body;

        const updatedCategory = await Category.findById(id);
        if(!updatedCategory){
            res.status(404).json({error : "Kategori bulunamadı..."});
        }
        const resultCategory = await Category.findByIdAndUpdate(id,updatedInfo,{ new: true, runValidators: true });
        res.status(200).json(resultCategory);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
})

module.exports = router;