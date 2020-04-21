var db=require('../db');
var shortid = require('shortid')
module.exports.index=function(req,res){
	res.render("user/index",{
		users: db.get('user').value()
	});	
};
module.exports.search=function(req,res){
	var q=req.query.q;
	var matchedUsers=db.get('user').value().filter(function(x){
		return x.name.indexOf(q)!==-1;
	});
	res.render("user/index",{
		users: matchedUsers
	});
};

module.exports.create=function(req,res){
	res.render('user/create');

};

module.exports.postCreate=function(req,res){
req.body.id=shortid.generate();
db.get('user').push(req.body).write();
res.redirect('/user');
};

module.exports.get=function(req,res){
var id=req.params.id;
 var user = db.get('user').find({ id: id }).value();
res.render('user/view',{
	users : user
});
};


