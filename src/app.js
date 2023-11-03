const express= require("express");
const router=require("../src/routers/men");

// requiring mongoose from the db foldder
require("../src/db/conn");

// requiring collections
const MensRanking=require("../src/models/mens");

const app=express();
const port=process.env.PORT||3000;

app.use(express.json());


// registering our router
app.use(router);





// listening to the request
app.listen(port,()=>{
console.log(`connection is live at port no.${port}`)
})



