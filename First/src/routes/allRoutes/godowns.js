const express=require('express');
const godown=require('../controller/godown/godown');
const routes=express.Router();
routers.use('/godown',godown.ping)
//router.use("/godown",godown);
module.exports=routes;