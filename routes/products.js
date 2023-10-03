const express = require('express');
const router  = express.Router();
const LaptopJSON = require("../products.json");
const laptopSchema = require('../model/Product_Model');


router.get('/',async (req,res)=>{
    try {
        const allProducts = await laptopSchema.find({});
        console.log("fetched all products");
        res.json(allProducts);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
 
})

router.get('/delete',(req,res)=>{
    try{
        laptopSchema.deleteMany()
        .then((result) => {
            res.send("All Data deleted");
            console.log("Successfully deleted:");
          })
          .catch((err) => {
            console.log("Error inserting data:", err);
          });
    }catch (error) {
        console.error("Error deleting products:", error);
    }
    
})

router.get('/add',(req,res)=>{
    laptopSchema.create(LaptopJSON)
    res.send("All data Set");
})

module.exports = router;