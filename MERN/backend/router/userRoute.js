
const express =require("express");
// const app = express();
const mongoose = require("mongoose");
const User =require("../models/userModel");
const router = express.Router();

// create/post 
router.post("/",async (req,res)=>{
    var {name,email,age} = req.body;

    try{
        const userAdded = await User.create({
            name:name,
            email:email,
            age:age
        });
        res.status(201).json(userAdded)
    }
    catch(error){
        console.log(error.message)
res.send(400).json({error:error.message})
    }
})

// get all user
router.get("/", async(req,res)=>{
   

    try{
        const showAll = await User.find();
        res.status(201).json(showAll)
    }
    catch(error){
        console.log(error)
res.send(500).json({error:error.message})
    }
    // res.send("api running now" );
})

// get singleuser
router.get("/:id", async(req,res)=>{
   const {id} = req.params;

    try{
        const singleUser = await User.findById({_id:id});
        res.status(201).json(singleUser)
    }
    catch(error){
        console.log(error)
res.send(500).json({error:error.message})
    }
    // res.send("api running now" );
})

// delete
router.delete("/:id", async(req,res)=>{
    const {id} = req.params;
 
     try{
         const deleteUser = await User.findByIdAndDelete({_id:id});
         res.status(201).json(deleteUser)
     }
     catch(error){
         console.log(error)
 res.send(500).json({error:error.message})
     }
     // res.send("api running now" );
 })

//  put/patch/update

router.patch("/:id", async(req,res)=>{
    const {id} = req.params;
    const {name,email,age}=req.body;
 
     try{
         const updateUser = await User.findByIdAndUpdate(id,req.body,{
            new:true
         });
         res.status(201).json(updateUser)
     }
     catch(error){
         console.log(error)
 res.send(500).json({error:error.message})
     }
     // res.send("api running now" );
 })


module.exports = router;