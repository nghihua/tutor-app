const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyLoggedIn = (req, res, next) => {
	const token = req.cookies.jwt;
	res.locals.loggedin = false;

	if (token) {
        jwt.verify(token, process.env.PRIVATE_KEY, async (err, decodedToken) => {
            if (err) {
                next();
            }
            else {
            	User.get_by_id(decodedToken.user_id, (error, results) => {
                    if(error || (!results.rowCount)) {
                        next();
                    }

                    res.locals.loggedin = true;
                    res.locals.current_user = results.rows[0];
                    
                    console.log("verified!");
                	next();
                });
            }
        });
    }
    else {
        next();
    }
}

const verifyProfileOwner = (req, res, next) => {
	const token = req.cookies.jwt;
    const user_id = req.params.id;
    if (token) {
        jwt.verify(token, process.env.PRIVATE_KEY, async (err, decodedToken) => {
            if (err || (decodedToken.user_id!=user_id)) {
                res.status(401).send({message: "Unauthorized"});
            }
            else {
            	console.log("verified!");
                next();
            }
        });
    }
    else {
        res.status(401).send({message: "Unauthorized"});
    }
}

module.exports = { verifyLoggedIn, verifyProfileOwner };