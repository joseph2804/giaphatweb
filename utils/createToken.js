const jwt = require('jsonwebtoken');

const createToken = (req, res, payload) => {
  // Sign the payload with a secret key to generate a token
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1m' });

  // Attach the token to the response object
  res.cookie('token', token, { 
    httpOnly: true,
    // secure: true // - for secure, https only cookie
});
}

module.exports = createToken