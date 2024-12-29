const express = require("express")
const router = express.Router();

const customers = [
    {
        id : 1,
        firstname : "Akın",
        lastname : "Cengiz",
        email : "akincengiz@msn.com",
        phone : "0123 456 78 90",
        city : "İstanbul",
        town : "Eyüp",
        balance : 15000.00
    },
    {
        id : 2,
        firstname : "Sergen",
        lastname : "Yalçın",
        email : "sergenyalcin@msn.com",
        phone : "0123 456 78 90",
        city : "İstanbul",
        town : "Beşiktaş",
        balance : 25000.00
    },
    {
        id : 3,
        firstname : "Necip",
        lastname : "Uysal",
        email : "necipuysal@msn.com",
        phone : "0123 456 78 90",
        city : "İstanbul",
        town : "Şişli",
        balance : 20000.00
    }
]

router.get("/",(req,res) => {
    res.json(customers);
})

module.exports = router;