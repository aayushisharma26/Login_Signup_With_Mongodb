const { signup,login } = require("../Controller/controller");
const express=require('express')

var router=express.Router();

router.post("/blog/users",signup)

router.post("/blog/login",login)

module.exports=router