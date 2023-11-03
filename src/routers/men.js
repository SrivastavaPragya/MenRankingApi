
const express=require("express")
const router=new express.Router();

const MensRanking=require("../models/mens");

//handling post request
router.post("/mens",async(req,res)=>{
try{

const addingMensRecords= new MensRanking(req.body)
console.log(req.body)
  const insertMens=await addingMensRecords.save();
  res.send(insertMens);

}catch(e){
res.status(400).send(e);
}

})


//handling get request reading the data
router.get("/mens",async(req,res)=>{
  try{
  
  const getMens=  await MensRanking.find({})
 
    res.send(getMens);
  
  }catch(e){
  res.status(400).send(e);
  }
  
  })



// getting element by id.... getting individual palyer

router.get("/mens/:id",async(req,res)=>{
    try{
    const _id=req.params.id;
    const getMen=  await MensRanking.findById(_id)
   
      res.send(getMen);
    
    }catch(e){
    res.status(400).send(e);
    }
    
    })


// handling patch method
 router.patch("/mens/:id",async(req,res)=>{
      try{
      const _id=req.params.id;
      const getMen=  await MensRanking.findByIdAndUpdate(_id,req.body,{
       new:true   // to see the new updated data on the postman 
      });
     
        res.send(getMen);
      
      }catch(e){
      res.status(500).send(e);
      }
      
      })
      // in update functio we use 500 error for error handling that is data related error




//handlig delete request
router.delete("/mens/:id",async(req,res)=>{
  try{
  const _id=req.params.id;
  const getMen=  await MensRanking.findByIdAndDelete(_id)
 
    res.send(getMen);
  
  }catch(e){
  res.status(500).send(e);
  }
  
  })
module.exports=router;