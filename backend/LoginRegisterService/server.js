const express =  require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5004;

app.use(cors());
app.use(bodyParser.json());

const URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
  
   useNewUrlParser:true,
   useUnifiedTopology:true,


});

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB Connected 🍀");
});

const user = require("./routes/LoginRegister"); //use this when implementing routes
app.use("/api/user", user);


app.listen(PORT,()=>{
    console.log(`LoginRegister Service is up and running on port ${PORT} ✨`);
})


