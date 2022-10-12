const router = require('express-async-router').AsyncRouter();

router.get('/getTime',(req,res)=>{
    const test="hello"
res.send({message:"success"})
})

module.exports=router;