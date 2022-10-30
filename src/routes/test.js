const router = require('express-async-router').AsyncRouter();

router.get('/getTime', (req, res) => {
  const data = 'allhamdulliah';
  res.status(200).json({ data });
});

module.exports=router;