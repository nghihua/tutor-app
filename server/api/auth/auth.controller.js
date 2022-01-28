const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');

require('dotenv').config();

const maxAge = 3*24*6*60;
const createToken = (data) => {
    return jwt.sign({user_id: data}, process.env.PRIVATE_KEY, {
        expiresIn: maxAge,
        algorithm: 'HS256'
    });
}

const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN
      }
    });

const login_post = (req,res) => {
    const { email, password } = req.body;

    User.login(email, password, async (error, results) => {
        if (error) {
            res.send(error);
        }
        else {
            if(results.rowCount) {
                if(await bcrypt.compare(password, results.rows[0].password)) {
                    const token = createToken(results.rows[0].user_id);
                    res.cookie("jwt", token, {httpOnly:true, maxAge: maxAge*1000});
                    res.send({message: "Log in successfully!"});
                }
                else {
                    res.status(400).send({message: "Incorrect password."});
                }
            }
            else {
                console.log("testing");
                res.status(400).send({message: "Email doesn't exist."});
            }
        }
    });
}

const signup_post = async (req,res) => {
    const { email, password, full_name, major, intake } = req.body;
    const salt = await bcrypt.genSalt();
    let hashed_password;

    try {
        hashed_password = await bcrypt.hash(password, salt);
    }
    catch (error) {
        console.log(error);
        res.status(400).send({message: "malformed password"});
        return;
    }
    
    User.signup(email, hashed_password, full_name, major, intake, (error, results) => {
        if (error) {
            if(error.constraint == "email_valid") {
                res.status(400).send({message: "Invalid email"});
            }
            else if(error.constraint == "users_email_key") {
                res.status(400).send({message: "Email already exists"});
            }
            else {
                console.log(error);
                res.send(error);
            }
        }
        else {
            //send email
            var mailOptions = {
              from: 'nghitest191@gmail.com',
              to: email,
              subject: 'Welcome to VGU Tutor App!',
              text: 'Happy to see you here!'
            };

            transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                console.log(error);
              } else {
                console.log('Email sent: ' + info.response);
              }
            });

            const token = createToken(results.rows[0].user_id);
            res.cookie("jwt", token, {httpOnly:true, maxAge: maxAge*1000});
            res.send({message: "Create new user successfully!"});
        }
    });
}

const logout_get = (req, res) => {
    res.clearCookie("jwt");
    res.send({message: "Log out successfully!"});
    console.log("log out succesffukt");
}

const login_status_get = (req, res) => {
    if (res.locals.loggedin) {
      console.log("logined")
        res.send(true);
    }
    else {
      console.log("no login")
        res.send(false);
    }
}

module.exports = {login_status_get, login_post, signup_post, logout_get};