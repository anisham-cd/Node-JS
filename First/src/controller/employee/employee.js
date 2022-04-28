let utilsping=require('../../utils/ping');
let responseBuilder = require('../../helper/responseBuilder');
const success  = require('../../helper/constant');

function ping(request,response){
    let data=utilsping.ping(request.query.number)
    response.send(responseBuilder.success(data))
}
module.exports={
    ping
}