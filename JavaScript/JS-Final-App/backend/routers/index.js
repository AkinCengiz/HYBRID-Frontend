const express = require("express");
const router = express.Router();
const auth = require("./auth");
const cagetories = require("./categories");
const products = require("./products");

router.use("/auth",auth);
router.use("/categories",cagetories)
router.use("/products",products);

module.exports = router;