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


 //..................LOGOUT ROUTES................
 const logout = (req,res,next)=>{
    res.cookie('token',null,{
        secure : true,
        maxAge:0,
        httpOnly:true
    });

    res.status(200).json({
        success:true,
        message:'User logged out successfully'
    })
}

 //..................GET PROFILE DETAIL ROUTES................
 const getProfile = async(req,res,next)=>{
    try{
        const userId = req.user.id;
        const user = await User.findOne(userId);

        res.status(200).json({
            success:true,
            message:'user details',
            user
        });
    }
    catch(err){
        return next(new AppError('failed to fetch profile data', 500));
  
    }
}

//..................FORGOT PASSWORD ROUTES................
const forgotPassword = async(req,res,next)=>{
    const {email} = req.body;
 
    if(!email){
     return next(new AppError('Email is required',400));
    }
 
    const user = await User.findOne({email});
    if(!user){
     return next(new AppError('Email is not registered',400));
    }
     
    const resetToken = await user.generatePasswordResetToken();
    console.log('User object before save:', user);
    await user.save();
 
    const resetPasswordURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`; // frontend k URL//reset-password par click kre to link k sath token bhej do
    
    const subject = 'Reset Password';
    const message = `You can reset password by clicking <a href=${resetPasswordURL} target="_blank">Reset your password </a> \n If above link does not work for some reason then copy paste this link in new tab ${resetPasswordURL}.\n If you have not requested this,kindely ignore this.`;
  
    try{
        await sendEmail(email,subject,message); // this function call is being writen in utils file.
 
        res.status(200).json({
         success:true,
         message:`Reset password token has been sent to ${email} successfully`
        });
    }
    catch(err){
     //if due to any region mail not sent correctly then forgotPasswordExpiry and forgotPasswordToken undefined kr do jo bnaye thai pr tb error dikhao
     user.forgotPasswordExpiry =undefined;
     user.forgotPasswordToken = undefined;
     await user.save();
 
     return next(new AppError(err.message, 500));
    }
 }

 //..................RESET PASSWRORD ROUTES................
const resetPassword = async(req,res,next)=>{  // data is coming in params form,params" typically refer to parameters that are part of the URL or the query string of a request
    const {resetToken} = req.params; // we are using query params which is encoded, to decode it write app.use(express.urlencoded({extended:true}))
    const {password} = req.body;  // password will enter by user in body.

    const forgotPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    //to check token has been send through email exist in database or not
    const user = await User.findOne({
       forgotPasswordToken,
       forgotPasswordExpiry:{$gt:Date.now()}  //checking exist kar rha token too expire too nhi hua
    });

    if(!user){
       return next(new AppError('Token is expired, please try again',400));
    }

    // if everything is alright then replace previous password with new password
    user.password = password;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordExpiry = undefined;  // kaam ho gya to token ko hta do
    user.save();

    res.status(200).json({
     success:true,
     message:'Password change successfully',
    })
}


//.................for changing the Password, if you know already your password.................
const changePassword = async(req,res,next)=>{
    const {oldPassword,newPassword} = req.body;
    const {id} = req.user;

    if(!oldPassword || !newPassword){
       return next(new AppError('All fileds required',400));
    }

    const user = await User.findOne(id).select('+password');

    if(!user){
       return next(new AppError('User does not Exist',400));
    }
    const isPasswordValid = await user.comparePassword(oldPassword);
    if(!isPasswordValid){
       return next(new AppError('Invalid old password',400));
    }

    user.password = newPassword;
    await user.save();
    user.password =undefined;
    res.status(200).json({
       success:true,
       message:'password change successfully'
    });
}

const updateUser = async (req,res,next)=>{
    const {fullName} = req.body;
    const {id} = req.user.id;
 
   const user = await User.findById(id);
   if(!user){
      return next(new AppError('User does not exits'),400);
   }
 
   if(req.fullName){
     user.name = fullName;
   }

 
    await user.save();
    res.status(200).json({
     success:true,
     message:'successfully updated details!',
    })
 }
module.exports = {signin,signup,logout,getProfile,forgotPassword,resetPassword,changePassword,updateUser}