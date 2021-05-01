var express = require("express");
var router = express.Router();
const { checkToken } = require("../auth/tokenValidation");

var budget_Controller = require('../controllers/budgetController');
var user_Controller = require("../controllers/userController");

// Budgets Router

//Get request for list of all Budgets.
router.get("/budgets", checkToken, budget_Controller.budget_list);

// POST request for create one Budget.
router.post("/budget/create", checkToken, budget_Controller.budget_create);

// GET request for one Budget.
router.get("/budget/:id", checkToken, budget_Controller.budget_detail);

// POST request to delete Budget.
router.delete("/budget/:id", checkToken, budget_Controller.budget_delete);

// POST request to update Budget.
router.put("/budget/:id", checkToken, budget_Controller.budget_update);

// User Router

//Get request for list of all Users.
router.get("/users", checkToken, user_Controller.user_list);

// POST request for SignUp one User.
router.post("/user/signup", user_Controller.user_create);

// POST request for SignIn one User.
router.post("/user/signin", user_Controller.user_login);

// GET request for one User.
router.get("/user/:id", checkToken, user_Controller.user_detail);

// POST request to delete User.
router.delete("/user/:id", checkToken, user_Controller.user_delete);

// POST request to update User.
router.put("/user/:id", checkToken, user_Controller.user_update);


module.exports = router;