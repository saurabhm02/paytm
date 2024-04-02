const jwt = require("jsonwebtoken");
require("dotenv").config();
const user = require("../models/user.model");
const jwt_secret = process.env.JWT_SECRET;

exports.authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(403).json({});
        }
    
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing",
            });
        }
        const decode = jwt.verify(token, jwt_secret);
        req.user = decode;
        next();
    } catch (error) {
        console.error("Error in authentication:", error);
        return res.status(401).json({
            success: false,
            message: "Token is invalid",
        });
    }
};