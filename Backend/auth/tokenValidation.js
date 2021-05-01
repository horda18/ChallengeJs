const jwt = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if (token) {
            // Remove Bearer from string
            token = token.slice(7);
            jwt.verify(token, "longer-secret-is-better", (err, decoded) => {
                if (err) {
                    return res.json({
                        message: "Invalid Token...",
                    });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            return res.json({
            message: "Access Denied! Unauthorized User",
            });
        }
    }
};
