const{json}=require('body-parsar');
const { query } = require('express');
const express=require('express');
const employeeData=require('../../scr/helper/employee.json');
const responseBuilder=require('../../src/helper/responseBuilder');
function listEmployee(request,response){
    response.send(responseBuilder.list(employeeData))
}
function listByName(request,response){
    let data=empployeeData.find(employeeData=>employeeData.id==request.query.id)
    response.send(responseBuilder.list(data));
}
function pushEmployee(request,response){
    let path='scr/doc/employee.json';
    console.log('posting employee details');
    let data=request.body;
    employeeData.push(data);
    response.send(responseBuilder.push(employeeData,path));
}
module.exports={
    listEmployee,
    listByName,
    pushEmployee
}