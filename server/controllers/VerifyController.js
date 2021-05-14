exports.verifyCheck = (req, res, next) => {
  // 인증 완료
  try {
    let token = req.cookies.x_auth;
    console.log(token);  
    if(token!=''&&token!=null&&token!=undefined){
      return next();
    }
    else{
      res.send({isAuth:false,error:true});
    }
  }
  catch (error) {
      res.send({isAuth:false,error:true});
  }
}
