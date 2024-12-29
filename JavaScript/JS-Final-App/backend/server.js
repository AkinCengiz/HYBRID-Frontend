const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers");

dotenv.config({
    path : "./config/env/config.env"
})

const PORT = process.env.PORT;
const app = express();
const PUBLIC_KEY = process.env.PUBLIC_KEY;

//console.log(PUBLIC_KEY)

app.use("/api",routers);

app.get("/",(req,res) => {
    res.send("Api ana sayfasına yönlendirildiniz...")
})


app.listen(PORT, () => {
    console.log(`Server ${PORT} portu üzerinden yayında...`);
})