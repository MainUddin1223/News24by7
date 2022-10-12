const router = require('express-async-router').AsyncRouter();

router.get('/getTime', (req, res) => {
  res.send({ message: 'success' });
});

module.exports=router;