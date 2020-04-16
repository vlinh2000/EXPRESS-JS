var express=require("express")
var app=express();
app.get('/',function(req,res){
	res.send("TRUONG VIET LINH ");
});
app.get('/user',function(req,res){
	res.send("list user");
});
app.listen(3000,()=>console.log("sever loading on port: 3000"));
