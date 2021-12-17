const User = require('../models/User');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const maxAge = 3*24*6*60;
const createToken = (data) => {
    return jwt.sign({user_id: data}, process.env.PRIVATE_KEY, {
        expiresIn: maxAge,
        algorithm: 'HS256'
    });
}

const current_user_get = (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.PRIVATE_KEY, (err, decodedToken) => {
            if (err) {
                res.send(false);
            }
            else {
                User.get_by_id(decodedToken.user_id, (error, results) => {
                    if(error || (!results.rowCount)) {
                        res.send(false);
                    }
                    res.send(results.rows[0]);
                });
            }
        });
    }
    else {
        res.send(false);
    }
}

const user_get = (req, res) => {
    const user_id = req.params.id;

    if (token) {
        jwt.verify(token, process.env.PRIVATE_KEY, async (err, decodedToken) => {
            if (err || (decodedToken.user_id!=user_id)) {
                res.status(401).send({message: "Unauthorized"});
            }
            else {
                
                User.get_by_id(decodedToken.user_id, (error, results) => {
                    if(error || (!results.rowCount)) {
                        res.status(401).send({message: "Unauthorized"});
                    }
                });

                User.get_by_id(user_id, async (error, results) => {
                    if (error) {
                        res.send(false);
                    }
                    else {
                        if (!results.rowCount) {
                            res.send(false);
                        }
                        res.send(results.rows[0]);
                    }
                });
            }
        });
    }
    else {
        res.status(401).send({message: "Unauthorized"});
    }

}

const user_put = (req, res) => {
    const token = req.cookies.jwt;
    const user_id = req.params.id;
    const { full_name, major, intake, is_volunteer, subject } = req.body;
    if (token) {
        jwt.verify(token, process.env.PRIVATE_KEY, async (err, decodedToken) => {
            if (err || (decodedToken.user_id!=user_id)) {
                res.status(401).send({message: "Unauthorized"});
            }
            else {
                try {
            		await User.update_info(user_id, full_name, major, intake, is_volunteer, subject);
            		res.send("update successfully!");
                }
                catch (e) {
                	res.send(e);
                }
            }
        });
    }
    else {
        res.status(401).send({message: "Unauthorized"});
    }
}

const tutors_get = (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.PRIVATE_KEY, async (err, decodedToken) => {
            if (err) {
                res.status(401).send({message: "Unauthorized"});
            }
            else {

                User.get_by_id(decodedToken.user_id, (error, results) => {
                    if(error || (!results.rowCount)) {
                        res.status(401).send({message: "Unauthorized"});
                    }
                });

                User.get_all_tutors((error, results) => {
                    if (error) {res.send(error)}
                    res.send(results.rows);
                });
            }
        });
    }
    else {
        res.status(401).send({message: "Unauthorized"});
    }
}


module.exports = {current_user_get, user_get, user_put, tutors_get};
