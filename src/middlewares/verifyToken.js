const jwt = require('jsonwebtoken');
require("dotenv").config();

const verifyToken = (req, res, next) => {
    const token = req.headers?.authorization
    if (!token) {
        return res.status(401).send({ message: "unauthorized access toekn nai " })
    }
    // const token = req.headers.authorization
    console.log("token ase to ", token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, decoded) => {
        if (error) {
            // console.log('object');
            return res.status(401).send({ message: "unauthorized access nor valid" })
        }
        req.decoded = decoded
        next();
    })
}


module.exports = verifyToken;

