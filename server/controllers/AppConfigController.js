const express = require('express');
const router = express.Router();
const appConfig = require('../models/AppConfig');

module.exports = {
  doAuth : function (req,res,next){
    console.log('http://localhost:3001/api/auth');
    if (req.cookies.x_auth == "aabbcc") {
      return res.status(200).json({ success: true, isAuth:true });
    } else {
      res.json({ success: false, isAuth:false });
    }
  },
  doLogin : function (req,res,next){
    console.log('http://localhost:3001/api/login');
    let email = req.body.email;
    if (email == "hyeban2020@gmail.com") {
      return res.cookie("x_auth", "aabbcc").status(200).json({
        loginSuccess: true,
        userId: "hyeban2020@gmail.com"
      });
      // return res.status(200).json({ loginSuccess: true,userId:"hyeban2020@gmail.com"});
    } else {
      res.json({ loginSuccess: false,message:"존재하지 않는 ID 입니다." });
    }
  },
  doLogout : function (req,res,next){
    console.log('http://localhost:3001/api/logout');
    res.clearCookie("x_auth");
    return res.status(200).send({
      success: true,
    });
  }
}
