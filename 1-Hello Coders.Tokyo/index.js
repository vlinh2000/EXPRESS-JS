var express=require("express")
var db=require('./db');
var app=express();
var useRouter = require('./routes/user.route');


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('./views/public'));

app.set('view engine', 'pug');
app.set('views', './views');
app.get('/',function(req,res){
	res.render("index",{
		name: "Linh"
	});
});

app.use('/user',useRouter);
app.listen(3000,()=>console.log("sever loading on port: 3000"));




