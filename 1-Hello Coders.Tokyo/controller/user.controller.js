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
var errors=[];
if(!req.body.name){
	errors.push("Name is required");
}
if(!req.body.phone){
	errors.push("Phone is required");
}
if(errors.length){
	res.render('user/create',{
	error: errors,
	values: req.body
	});
	return;
}
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


