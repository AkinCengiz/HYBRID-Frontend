const express = require("express");
const products = require("./products");
const users = require("./users");
const categories = require("./categories");

const router = express.Router();

router.use("/products",products);
router.use("/users",users);
//router.use("/categories",categories);

module.exports = router;