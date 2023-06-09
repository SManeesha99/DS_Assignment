const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
  
   useNewUrlParser:true,
   useUnifiedTopology:true,


});


// routes
const oder = require("./routes/Oder"); //use this when implementing routes
app.use("/api/Oder", oder);

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB Connected 🍀");
});


app.listen(PORT,()=>{
    console.log(`Oder Service is up and running on port ${PORT} ✨`);
})


