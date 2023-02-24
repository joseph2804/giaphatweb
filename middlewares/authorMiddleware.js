const jwt = require('jsonwebtoken');
const createToken = require('../utils/createToken');

module.exports = function (req, res, next) {
    // Get the token from the request header
    const token = req.cookies.token;

    // If no token is provided, return an error response
    if (!token) {
        return res.render('error', { message: 'Unauthorized' });
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Add the user object to the request object for future use
        req.user = decoded; 
        const payload = {
            UserId: req.user.UserId,
            Email: req.user.Email,
        };
        
        createToken(req, res, payload)

        // Call the next middleware function
        next();
    } catch (err) {
        // If the token is invalid or expired, return an error response
        return res.redirect('login');
    }
};