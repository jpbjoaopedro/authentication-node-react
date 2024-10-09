var express = require('express');
var router = express.Router();

// config
var config = require('../config/config.js');
// jwt
var jwt = require('jsonwebtoken');

/*
 * Receive email and password
*/
router.post('/login', (req, res, next) => {
  const { email, password } = req.body.userData;

    if(email === undefined || password === undefined){
        res.status(401).json({
            sucess: false,
            code: 'DD101',
            message: 'Email or password not provided',
        });
    } else {
        let tokenData = {
            id:101
        };
        let generatedToken = jwt.sign({ tokenData }, config.jwtSecret, { expiresIn: '1h' });
        res.json({
            sucess: true,
            token: generatedToken,
        });
    };
});

module.exports = router;