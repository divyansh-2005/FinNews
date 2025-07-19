const jwt = require("jsonwebtoken");
const AppError = require("../utils/error.util.js");
const dotenv = require("dotenv");
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY

const auth = (req,res,next)=>{
    try {
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token,SECRET_KEY);
            req.userId = user.id;
        }
        else{
            return res.status(401).json({message: "Unauthorized User"})
        }

        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({message: "Unauthorized User"})
    }
}

const isLoggedIn = async (req, res, next) => {
    try {
        const { token } = req.cookies.token;
        console.log('token:',token);
        if (!token) {
            return next(new AppError('Unauthenticated, please login again', 401));
        }

        const userDetails = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = userDetails;
        next();
    } catch (err) {
        return next(new AppError('Invalid or expired token, please login again', 401));
    }
}

module.exports = {auth,isLoggedIn};