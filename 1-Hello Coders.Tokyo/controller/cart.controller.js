var db = require('../db');
module.exports.cart= function(req,res){
	var productID=req.params.productID;
	var sessionID=req.signedCookies.sessionID;
	if(!sessionID){
		res.redirect("/product");
		return;
	}
   var count=db.get('sessionID')
   .find({id:sessionID})
   .get("cart."+productID,0)
   .value();

   var total=db.get('sessionID')
   .find({id:sessionID})
   .get('cart.total',0)
   .value();

    db.get('sessionID')
    .find({id:sessionID})
    .set('cart.'+ productID ,count+1)
    .set('cart.total',total+1)
    .write();
    
    res.redirect("/product");
}