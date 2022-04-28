const express=require('express');
//const godowns=require('./src/routes/allRoutes/godowns');
//const medicine=require('./src/routes/allRoutes/medicine');
const employee=require('./allRoutes/employee');

const router=express.Router();
//router.use('./godowns',godowns);
//router.use('/medicine',medicine);
router.use('/employee',employee);

module.exports=router;