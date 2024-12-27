const express = require("express");

const router = express.Router();

const users = [
    { id : 1, firstname : "Betül", lastname : "Aktoprak"},
    { id : 2, firstname : "Halil İbrahim", lastname : "Karakuş"},
    { id : 3, firstname : "Hatice Kübra", lastname : "Tosun"},
    { id : 4, firstname : "Hüseyin", lastname : "Çiçek"},
    { id : 5, firstname : "İsa Yasin", lastname : "Kuru"},
    { id : 6, firstname : "Mehmet", lastname : "Albayrak"},
    { id : 7, firstname : "Mehmet Fatih", lastname : "Bezan"},
    { id : 8, firstname : "Melih Can", lastname : "Akgüneş"},
    { id : 9, firstname : "Mert", lastname : "Nazlı"},
    { id : 10, firstname : "Mertcan", lastname : "İncioğulları"},
    { id : 11, firstname : "Mutlu", lastname : "Tayfun"},
    { id : 12, firstname : "Orçun", lastname : "Gökoluk"},
    { id : 13, firstname : "Simay", lastname : "Seyman"},
    { id : 14, firstname : "Zehra", lastname : "Varan"},
    { id : 15, firstname : "Silinecek", lastname : "Silinecek"}
];

router.get("/",(req,res) => {
    res.json(users);
})

router.post("/",(req,res) => {
    users.push(req.body);
    res.json(users);
})

router.delete("/:id",(req,res) => {
    const userId = parseInt(req.params.id);
    for(let i = 0; i < users.length; i++){
        if(users[i].id === userId){
            users.splice(i,1);
        }
    }
    res.json(users);
})

router.put("/:id",(req,res) => {
    const userId = parseInt(req.params.id);
    for(let i = 0; i < users.length; i++){
        if(users[i].id === userId){
            users[i] = {
                ...users[i],...req.body
            }
        }
    }
    res.json(users);
})

module.exports = router;