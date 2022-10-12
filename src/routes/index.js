const express = require('express')
const testRoute = require('./test')
const router = express.Router()
const defaultRoutes = [
    {path:'/test' , route:testRoute}
]

defaultRoutes.forEach((route)=>{
    router.use(route.path,route.route)
})
module.exports = router