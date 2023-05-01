const { errorHandler } = require('../middleware/errorhandler');

const router = require('express-async-router').AsyncRouter();

router.get('/getTime', (req, res) => {
  errorHandler()
try{
  const data = 'allhamdulliah';
  hf
  res.status(200).json({ status:200,data });
}catch(e){
res.status(400).json({message:e.message})
}
});
router.get('/getTime1', (req, res) => {
  const data = 'allhamdulliah';
  console.log('------------------------------------------')
  res.status(200).json({ status:200,data });
});

module.exports=router;