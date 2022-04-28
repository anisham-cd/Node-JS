const express=require('express');
const employeeController=require('../../controller/employee/employee');
const router=express.Router();
router.get('/list',employeeController.ping)
module.exports=router
