const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const url = "mongodb+srv://admin:admin@ambulancedispatch.7yt2txc.mongodb.net/";


const userRouter = require("./routes/Users");

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.once("open", ()=> {
    console.log("connected");
})

//middlewares
app.use("/auth", userRouter);
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.listen("3001",()=> {
    
});
