const mongoose=require("mongoose")
const express=require("express")
const user=require("./backend-CA_2/user")
require("dotenv").config()
const app=express()
app.use(express.json())

mongoose.connect(process.env.MONOGO_URL)
.then(()=>{
    console.log("Connected to MongoDb")
})
.catch((err)=>{
    console.log("Error connecting to MongoDb",err)
});

//email
app.post("/email",async(req,res)=>{
    try{
        const newEmail=new Email(req.body)
        await newEmail.save()
        res.status(201).json({message:"Email created and saved Succesfully"})
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
});

//password
app.post("/password", async(req,res)=>{
    try{
        const newPassword=new Password(req.body)
        await newPassword.save()
        res.status(201).json({message:"Password created and saved Succesfully"})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
});



app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})
