const express = require("express");

const router = express.Router();

router.get("/",(req,res) => {
    res.send("Auth sayfasına yönlendirildiniz...");
})

module.exports = router;