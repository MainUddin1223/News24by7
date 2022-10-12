const express = require('express');
const testRoute = require('./test');
const userRoute = require('./users');
const publications = require('./publication');
const adminRoute = require('./admin');
const router = express.Router();
const defaultRoutes = [
  { path: '/test', route: testRoute },
  { path: '/users', route: userRoute },
  { path: '/admin', route: adminRoute },
  { path: '/publications', route: publications },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
