const sql = require("../config/database");

// constructor
const User = function (user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
};

User.getAll = results => {
    sql.query(
        "SELECT * FROM users",
        (err, res) => {
            if (err) {
            console.log(err);
            results(null, err);
            return;
            }
            console.log("users: ", res);
            results(null, res);
        }
    );
};

User.create = (newUser, results) => {
    sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
        if (err) {
            console.log(error);
            results(err, null);
            return;
        }
        console.log("created newUser: ", { id: res.insertId, ...newUser });
        results(null, { id: res.insertId, ...newUser });
    });
};

User.findById = (userId, result) => {
  sql.query("SELECT * FROM users WHERE id = ?", [userId], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        if (res) {
            console.log("found user: ", res);
            result(null, res);
            return;
        }
    });
};

User.getUserByEmail = (emailUser, result) => {
  sql.query("SELECT * FROM users WHERE email = ?", [emailUser], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        if (res) {
            console.log("found emailUser: ", res);
            result(null, res[0]);
            return;
        } else {
            result(null, emailUser);
            return;
        }
    });
};

User.update = (id, user, result) => {
    sql.query("UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?", [user.name, user.email, user.password, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("updated user: ", { id: id, ...user });
            result(null, { id: id, ...user });
        });
};

User.delete = (id, result) => {
    sql.query("DELETE FROM users WHERE id="+ id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("deleted user with id: "+ id);
        result(null, res);
    });
};


module.exports = User;