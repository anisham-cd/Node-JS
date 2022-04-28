 
let responseBuilder=require('../helper/responseBuilder')
 function ping(number){
    let square=number*number;
   
    let data={
      "number":number,
      "square":square
    }
    let name=responseBuilder.success(data)
    return name;
  }
   module.exports={
       ping
   }
   