const Budget = require('../models/budget');

// Retrieve all  budgets from the database.

exports.budget_list = (req, res) => {
    Budget.getAll((err, data) => {
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

// Create and Save a new Budget
exports.budget_create = (req, res) => {
    var budget = new Budget(
        {
            concept: req.body.concept,
            amount: req.body.amount,
            date: req.body.date,
            type: req.body.type
        }
    );

    Budget.create(budget, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "error"
            })
        else res.send(data);
    })
};

// Find a single Budget with a BudgetId
exports.budget_detail = (req, res) => {
    Budget.findById(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Error retrieving budget with id " + req.params.id
            });
        }
        else res.send(data);
    })
};

// Update a Budget identified by the budgetId in the request
exports.budget_update = (req, res) => {
    Budget.update(
        req.params.id, new Budget(req.body), (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error updating budget with id " + req.params.id
                });
            }
            else res.send(data);
        }
    )
};

// Delete a Budget with the specified budgetId in the request
exports.budget_delete = (req, res) => {
    Budget.delete(req.params.id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Could not delete budget with id " + req.params.id
            });
        }
        else res.send({ message: `budget was deleted successfully! ${req.params.id}` });
    })
};