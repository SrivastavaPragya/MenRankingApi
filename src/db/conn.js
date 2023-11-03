const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/olympics", { useNewUrlParser: true,
 useUnifiedTopology: true }).then(()=>{
    console.log("connection is succesful")
 }).catch((e)=>{
console.log("NO connection")
 })


