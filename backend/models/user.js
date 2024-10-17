import {model,Schema} from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
const userSchema = new Schema ({

   name:{
    type: String,
    trim:true,
    minlength:[3,"name must  greater than 3 character"],
    maxlength:[30,"name must not be greater than 30 character"],
    required:[true,"Name must required"],
    lowercase:true,
   },

   email:{
    type: String,
    required:[true,"Email must required"],
    unique:[true,"Email already exist"],
    lowercase:true,
    trim:true,
   },

   password:{
    type:String,
    required:[true,"password must required"],
    minlength:[8,"atleast 8 character"],
    select:false,    // password dont show to user.
   },

    //  If need a profie photo/ avatar from user(below code)
   avatar:{
        public_id:{
            type:String
        },
        secure_url:{
             type:String
        }
    },
    
    // If we are taking multiple type of users like normal user, admin etc
    role:{
         type:String,
         enum:['USER','ADMIN'],   // enum helps to get idea which type user will login as normal user of admin or others
         default:'USER'    //  bydefault if role not mentioned then treat as normal user.
    },

    forgotPasswordToken:{
        type:String,
     },

     forgotPasswordExpiry:{
        type:Date,
     }
},{
    timestamps:true
});

// encrypt the password
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password,10);

})

//creating tokens......
userSchema.methods = {
    generateJWTToken: async function(){
        return await jwt.sign(
            {id:this._id , email:this.email,subscription:this.subscription,role:this.role},
             process.env.JWT_SECRET,
             {
                expiresIn:process.env.JWT_EXPIRY,
             }
        )
    },

    comparePassword: async function(plainTextPassword){
          return await bcrypt.compare(plainTextPassword,this.password);
    },

    generatePasswordResetToken: async function() {
        // Generate a random reset token
        const resetToken = crypto.randomBytes(20).toString('hex');
        
        // Hash the reset token and store it in forgotPasswordToken
        this.forgotPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        
        // Set the expiry time for the token (15 minutes from now)
        this.forgotPasswordExpiry = Date.now() + 15 * 60 * 1000;
        
        // Return the reset token in its original form
        return resetToken;
    }
    
}

const User = model('User',userSchema);  // this is used to create collection in mongodb , In js form we can write module.export = mongoose.model('user',userschema);

export default User;