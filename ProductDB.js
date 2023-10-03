const LaptopJSON = require("./products.json");
const connectDB = require("./DB/Connection");

const uri ="mongodb+srv://hetrojivadiya999:hetrojivadiya@het.ioacmg7.mongodb.net/Laptops?retryWrites=true&w=majority";
const laptop = require("./model/Product_Model");
connectDB(uri);

const upload = async () => {
//    await laptop.deleteMany()
  await laptop.create(LaptopJSON)
    .then((result) => {
      console.log("Successfully inserted:");
    })
    .catch((err) => {
      console.log("Error inserting data:", err);
    });
};

upload();
