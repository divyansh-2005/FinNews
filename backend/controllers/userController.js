const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY
// console.log("SECRET_KEY:",process.env.SECRET_KEY);

const signup = async (req,res)=>{

    const {username,email,password} = req.body;
    try{

        //Existing user check
        const existinguser = await userModel.findOne({email:email})
        if(existinguser){
            return res.status(400).json({message:"User already exists"})
        }

        // Hashed Password
        const hashedPassword = await bcrypt.hash(password,10);
        // console.log('Password hashed:', hashedPassword);

        //user Creation
        const result = await userModel.create({
            email:email,
            password:hashedPassword,
            username:username,
        })

        // Token Generate
        const token = jwt.sign({email: result.email, id: result._id},SECRET_KEY);

        //Response
        res.status(200).json({user:result,token})

    } catch(error){
        console.log(error);
        res.status(500).json({message:"Something went wrong"});
    }
}


const signin = async(req,res)=>{
    const {email,password} = req.body;

    try {
        const existinguser = await userModel.findOne({email:email});
        if(!existinguser){
            return res.status(404).json({message:"User not found"});
        }
        // console.log('Password from request:', password);
        // console.log('Password from database:', existinguser.password);
        
        const matchPassword = await bcrypt.compare(password,existinguser.password)
        // console.log('Password comparison result:', matchPassword);
        if(!matchPassword){
            return res.status(422).json({message:"Invalid Credentials"})
        }

        const token = jwt.sign({email: existinguser.email, id: existinguser._id},SECRET_KEY);
        res.status(201).json({user:existinguser,token})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Something went wrong"});  
    }
}

module.exports = {signin,signup}