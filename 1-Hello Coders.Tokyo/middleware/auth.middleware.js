var db = require('../db');
module.exports.requireMiddleware = function(req,res,next){
	if(!req.signedCookies.userID){
		res.redirect('/auth/login');
		return;
	}
	var user=db.get('user').find({id: req.signedCookies.userID}).value();
	if(!user){
		res.redirect('/auth/login');
		return;
	}
	res.locals.user=user;
	next();
}