'use strict';

var express = require('express');
const User = require('../models/User.model');
var server = express.Router();
const authorMiddleware = require('../middlewares/authorMiddleware');
//var productHelper = require('../scripts/ProductHelper');

server.get('/', authorMiddleware, function (req, res, next) {
    res.render('pages/management');
});


module.exports = server;