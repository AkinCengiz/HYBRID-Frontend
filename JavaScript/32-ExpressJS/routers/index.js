const express = require("express");
const products = require("./products");
const users = require("./users");
const categories = require("./categories");
const customers = require("./customers");

const router = express.Router();

router.use("/products",products);
router.use("/users",users);
router.use("/categories",categories);
router.use("/customers",customers)

module.exports = router;