var db = require('../db');
module.exports.cart= function(req,res){
	var productID=req.params.productID;
	var sessionID=req.signedCookies.sessionID;
	if(!sessionID){
		res.redirect("/product");
		return;
	}
   
   var total=0;
   var count=db.get('sessionID')
   .find({id:sessionID})
   .get("cart."+productID,0)
   .value();

    db.get('sessionID')
    .find({id:sessionID})
    .set('cart.'+ productID ,count+1)
    .write();
    res.redirect("/product");
}