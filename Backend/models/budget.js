const sql = require("../config/database");

// constructor
const Budget = function (budget) {
    this.concept = budget.concept;
    this.amount = budget.amount;
    this.date = budget.date;
    this.type = budget.type;
};

Budget.getAll = results => {
    sql.query(
        "SELECT * FROM budgets",
        (err, res) => {
            if (err) {
            console.log(err);
            results(null, err);
            return;
            }
            console.log("budgets: ", res);
            results(null, res);
        }
    );
};

Budget.create = (newBudget, results) => {
    sql.query("INSERT INTO budgets SET ?", newBudget, (err, res) => {
        if (err) {
            console.log(error);
            results(err, null);
            return;
        }
        console.log("created newBudget: ", { id: res.insertId, ...newBudget });
        results(null, { id: res.insertId, ...newBudget });
    });
};

Budget.findById = (budgetId, result) => {
  sql.query("SELECT * FROM budgets WHERE id = ?", [budgetId], (err, res) => {
        if (err) {
            console.log("error:", err);
            result(err, null);
            return;
        }
        if (res) {
            console.log("found budget: ", res);
            result(null, res);
            return;
        }
    });
};

Budget.update = (id, budget, result) => {
    sql.query("UPDATE budgets SET concept = ?, amount = ?, date = ?, type = ?  WHERE id = ?", [budget.concept, budget.amount, budget.date, budget.type, id],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            console.log("updated budget: ", { id: id, ...budget });
            result(null, { id: id, ...budget });
        });
};

Budget.delete = (id, result) => {
    sql.query("DELETE FROM budgets WHERE id="+ id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("deleted budget with id: "+ id);
        result(null, res);
    });
};


module.exports = Budget;