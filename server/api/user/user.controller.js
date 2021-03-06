const User = require('../../models/User');
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

    if (!res.locals.loggedin) {
        res.status(401).send({message: "Unauthorized"});
    }
    else {
        res.send(res.locals.current_user);
    }

}

const user_get = (req, res) => {
    const user_id = req.params.id;

    if (!res.locals.loggedin) {
        res.status(401).send({message: "Unauthorized"});
    }
    else {
        User.get_by_id(user_id, async (error, results) => {
            if (error) {
                res.status(400).send("Invalid ID");
            }
            else {
                if (!results.rowCount) {
                    res.status(404).send({message: "User not found"});
                }
                res.send(results.rows[0]);
            }
        });
    }

}

const edit_permission_get = (req, res) => {

    if (res.locals.edit_permission) {
        res.send(true);
    }
    else {
        res.send(false);
    }

}

const user_put = async (req, res) => {
    if (!res.locals.edit_permission) {
        res.status(401).send({message: "Unauthorized"});
    }
    else {
        const user_id = req.params.id;
        const { full_name, major, intake, is_tutor, subjects } = req.body;
        try {
            await User.update_info(user_id, full_name, major, intake, is_tutor, subjects);
            res.send({message: "Update successfully!"});
        }
        catch (e) {
            res.send(e);
        }
    }
}

const tutors_get = (req, res) => {

    if (!res.locals.loggedin) {
        res.status(401).send({message: "Unauthorized"});
    }
    else {
        User.get_all_tutors((error, results) => {
            if (error) {res.send(error)}
            res.send(results.rows);
        });
    }

}


module.exports = {current_user_get, user_get, edit_permission_get, user_put, tutors_get};