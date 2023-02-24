'use strict';

var express = require('express');
const User = require('../models/User.model');
const createToken = require('../utils/createToken');
var server = express.Router();
//var productHelper = require('../scripts/ProductHelper');

server.get('/', function (req, res, next) {
    res.render('pages/login');
});

server.post('/', function (req, res, next) {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    User.findByEmailAndPass(req.body.email, req.body.password, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while query db"
            });
        else {
            if (data) {
                const payload = {
                    UserId: data.UserId,
                    Email: data.Email,
                  };
                createToken(req, res, payload)
                res.redirect('admin')
            }
        }
    });
});


module.exports = server;