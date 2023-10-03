const express = require("express");
const app = express();


const connectDB = require("./DB/Connection");
const product_router = require('./routes/products');

const uri ="mongodb+srv://hetrojivadiya999:hetrojivadiya@het.ioacmg7.mongodb.net/test?retryWrites=true&w=majority";
connectDB(uri);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("This is About Page");
});


app.use('/product',product_router);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

