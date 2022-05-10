//let utilsping=require('../utils/ping')
let responseBuilder=require('../../helper/responseBuilder')
//const success  = require('../../helper/constant');
const router= require('express').Router();
//const routers = require('../../routes/allRoutes/godown');

let godownlist=[
    { id:"001",location:"cbe",city:"ukkadam"},
    { id:"002",location:"chennai",city:"T Nagar"},

];
router.get('/getGodown',(request,response)=>{
    return response.send(
        responseBuilder.responseBuilder({godownlist:godownlist})
    );
});
router.get('/getGodownById',(request,response)=>{
   let godown=godownlist.find((godown)=>godown.id==request.query.id)
   return response.send(responseBuilder.responseBuilder({godown:godown}))

});
module.exports=router;