require('dotenv').config();
var express=require("express")
var db=require('./db');
var app=express();

var useRouter = require('./routes/user.route');
var cookieParser = require('cookie-parser')
var authRouter= require('./routes/auth.route');
var products=require('./routes/product.route');
var cartRouter=require('./routes/cart.route');

var useMiddleware = require('./middleware/auth.middleware');
var sessionMiddleware = require('./middleware/session.middleware')

app.use(cookieParser(process.env.SESSION_SECRECT));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('./views/public'));
app.use(express.static('./public'));

app.set('view engine', 'pug');
app.set('views', './views');
app.get('/',function(req,res){
	res.render("index",{
		name: "Linh"
	});
});

app.use(sessionMiddleware);
app.use('/user',useMiddleware.requireMiddleware,useRouter);
app.use('/auth', authRouter);
app.use('/',products);
app.use('/cart',cartRouter);
app.listen(3000,()=>console.log("sever loading on port: 3000"));




