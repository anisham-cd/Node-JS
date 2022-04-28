const logger=require('./src/helper/logger');
const constant=require('./src/helper/constant');
const fs=require('fs');
const read=require('./src/read/read.js');
const write=require('./src/write/write.js');
read.readFiles('./src/docs/end.txt');
read.readFiles('./src/docs/start.txt');
write.writeFiles('./src/docs/write.txt','nice to meet you!');
const express=require('express');
const ping=require('./src/controller/ping');
const routes=require('./src/routes/routes');
const app=express();
const port=process.env.PORT ||3003

app.use('/api/v1',routes)
app.get('/ping',ping.ping)

app.listen(port,()=>{
    console.log(`server is running in port no ${port}` )
})


logger.name()
logger.baseError(constant.error)
logger.baseSuccess(constant.success)
fs.readdir('./src/docs/',(err,data)=>{
    if(err)
    console.log(err)
    else
    console.log(data)
})




console.log("apple");
logger.wait(5000,'ball')
console.log("orange");