var db= require('../db');
var shortid = require('shortid')
module.exports.product=function(req,res){
	var page = parseInt(req.query.page)||1; //n
	var perPage = 8; //x
	// var begin=(page-1)*perPage;
	// var end=page*perPage;
    var drop=(page-1)*perPage;
	res.render("product/product.pug",{
		// products: db.get('product').slice(begin,end).value()
		products: db.get('product').drop(drop).take(perPage).value(),
		pageNumber: [page-1,page,page+1],
		page: page
	});
    
}
// drop(n): cat tu n cho do den het mang
//take(n): lay n phan tu trong mang