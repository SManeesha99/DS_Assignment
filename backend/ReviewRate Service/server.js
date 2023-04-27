const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5003;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
  
   useNewUrlParser:true,
   useUnifiedTopology:true,


});

// routes
const review = require("./routes/Review"); //use this when implementing routes
app.use("/api/Review", review);

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB Connected 🍀");
});


app.listen(PORT,()=>{
    console.log(`Review Rate Service is up and running on port ${PORT} ✨`);
})


