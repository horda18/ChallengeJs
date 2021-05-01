const User = require('../models/user');
const bcrypt = require("bcrypt");
const { sign } = require('jsonwebtoken');

// Retrieve all users from the database.
exports.user_list = (req, res) => {
    User.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message:
                    err.message || "Error"
            });
        }
        else {
            res.send(data);
        }
    });
};

// Create and Save a new User
exports.user_create = (req, res) => {
    User.getUserByEmail(req.body.email, (err, results) => {
        if (err) {
            console.log(err);
        }

        if(results) {
            return res.json({
                data: "Email already in use."
            });
        }

        bcrypt.hash(req.body.password, 10, function(err, hash) {
            if (err){
                return res.json({ error: true });
            }
            var user = new User(
            {
                name: req.body.name,
                email: req.body.email,
                password: hash
            });
            User.create(user, (err, data) => {
                if (err) {
                    res.status(500).send({
                        message:
                            err.message || "error"
                    })
                } else {
                    res.status(201).json({
                        message: "User Successfully created!",
                        result: data
                    });
                }
            })
        });
    });
};

exports.user_login = (req, res) => {
    User.getUserByEmail(req.body.email, (err, results) => {
        if (err) {
            console.log(err);
        }

        if(!results) {
            return res.json({
                data: "Invalid email or password"
            });
        }
        const result = bcrypt.compare(req.body.password, results.password);
        if (result) {
            results.password = undefined;
            let jsontoken = sign(
                { result: results }, 
                "longer-secret-is-better",
                {expiresIn: "1h"}
                );
                return res.json({
                    message: "Login successfully", 
                    token: jsontoken,
                    expiresIn: 3600
                });
        } else {
            return res.json({
                data: "Invalid email or password"
            });
        }
    });
}

// Find a single User with a UserId
exports.user_detail = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Error retrieving user with id " + req.params.id
            });
        }
        else res.send(data);
    })
};

// Update a User identified by the userId in the request
exports.user_update = (req, res) => {
    User.update(
        req.params.id, new User(req.body), (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error updating user with id " + req.params.id
                });
            }
            else res.send(data);
        }
    )
};

// Delete a User with the specified userId in the request
exports.user_delete = (req, res) => {
    User.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Could not delete user with id " + req.params.id
            });
        }
        else res.send({ message: `user was deleted successfully! ${req.params.id}` });
    })
};
