'use strict';

var express = require('express');
var nodemailer = require('nodemailer');
var server = express.Router();
//var productHelper = require('../scripts/ProductHelper');

server.post('/sendMail', function (req, res, next) {
    const hostEmail = process.env.HOST_EMAIL
    const password = process.env.EMAIL_PASS
    const mailTo = req.body.mailTo
    const message = req.body.message
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: hostEmail,
            pass: password
        }
    });

    var mailOptions = {
        from: hostEmail,
        to: mailTo,
        subject: 'Pham Gia Phat Construction Company',
        text: 'Hello, we received your message, our consultant will contact you soon'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

module.exports = server;