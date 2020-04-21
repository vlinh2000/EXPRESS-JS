var db=require('../db');
var md5=require('md5');
module.exports.login =function(req,res){
	res.render('auth/login');
}

module.exports.postLogin = function(req,res){
	var email=req.body.email;
	var password = req.body.password;
	var user = db.get('user').find({email: email}).value();
    
    if(!user){
    	res.render('auth/login',{
          errors: [
          'User not exist'
          ],
          values: req.body
    	});
    	return;
    }
    var hashPassword= md5(password);
   if(hashPassword !== user.password){
    res.render('auth/login',{
          errors : [
          'Wrong password!'
          ],
          values: req.body
    	});
    	return;
   }
   res.cookie('userID',user.id,{
    signed:true
   });
    res.redirect('/user');
}