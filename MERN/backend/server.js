// npm run dev (for running this code)

const express =require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const cors =require("cors");
app.use(cors());

const userRoute = require("./router/userRoute");
app.use(express.json());

mongoose.connect(process.env.url).then(()=>{
    console.log("connected successfully");

    app.listen(process.env.PORT ||8000,()=>{
        console.log("server is created",process.env.PORT);
        })
})
.catch((error)=>{
    console.log("error",error);
})

app.use(userRoute);

