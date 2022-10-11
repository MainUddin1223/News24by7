const express = require("express")
const PORT = 3006  ;
const app =  express()

const hello = "test husky"

app.get('/test',(req,res)=>{
    res.json({status:true , message:"server respond successfully"})
})
app.listen(PORT,()=>console.log("server is running on 3006"))