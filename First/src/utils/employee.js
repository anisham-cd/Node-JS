
let responseBuilder = require('../helper/responseBuilder');
//const { ping } = require('./ping');
let employee=[];
function push(body){
    //let body=request.body;
    body['id']=employee.length+1;
    employee.push(body);
//console.log(request.body);
//employee.push(request.body);
//console.log(employee);
//if(elem.email=body.email){
    

//employee.push (body);
let resp=responseBuilder.responseBuilder(employee)
return resp;
}
function listByName(name){
    let result=[];
    for(let elem of employee){
        if(elem.name.toLowerCase()==name.toLowerCase())
        result.push (elem)
    }
    let resp=responseBuilder.responseBuilder(result)
    return resp;

}
function list(query){
   let result=[];
    for(let elem of employee){
        if(query.name)
           if(elem.name.toLowerCase()==query.name.toLowerCase())
           result.push (elem)
        else if(query.location)
           if(elem.location.toLowerCase()==query.location.toLowerCase())
           result.push (elem)
        else if(query.age)
           if(elem.age==query.age)
           result.push (elem)
    }
    let resp=responseBuilder.responseBuilder(result)
    return resp;
}
module.exports={
    
    push,
    listByName,
    list
}