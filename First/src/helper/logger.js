//let logger=require('./src/helper/logger');
function name(){
    console.log('Hello')
}
function baseSuccess(success){
    console.log("new date of success",new Date,success);
}
function baseError(error){
    console.log("new date of error",new Date,error);
}
function wait(time,message){
    setTimeout(()=>{
        console.log(message)
    },time)
}
module.exports={
    name:name,
    baseSuccess:baseSuccess,
    baseError:baseError,
    wait:wait
}