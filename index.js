var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser')
var server = express();

var home = require('./controllers/Home');
var user = require('./controllers/User');
var admin = require('./controllers/Admin');
var management = require('./controllers/Management');
require('dotenv').config();
// var contact = require('./controllers/Contact');
// var shopDetails = require('./controllers/ShopDetails');
// var shopGrid = require('./controllers/ShopGrid');
// var shoppingCart = require('./controllers/ShoppingCart');

server.use(express.static(__dirname + '/clients'));
server.use(cors());
server.set('view engine', 'ejs');
server.use([bodyParser.json(), bodyParser.urlencoded({ extended: true }), cookieParser()]);
server.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: { maxAge: 300000 }
}));

const port = process.env.PORT || 3000;
server.listen(port, function () {
    console.log(`Example app listening at http://localhost:${port}`)
});

server.use('/home', home);
server.use('/login', user);
server.use('/admin', admin);
server.use('/management', management);
// server.use('/contact', contact);
// server.use('/shop-details', shopDetails);
// server.use('/shop-grid', shopGrid);
// server.use('/shopping-cart', shoppingCart);

server.get('/', function (req, res) {
    return res.redirect('/home');
});