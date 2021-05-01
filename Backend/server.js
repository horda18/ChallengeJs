const express = require("express");
const morgan = require("morgan");
const cors = require("cors");


var apiRouter = require('./routes/api');
var indexRouter = require('./routes/index');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081",
};

// Middlewares
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

// Routes
app.use("/", indexRouter);
app.use("/api", apiRouter);

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
