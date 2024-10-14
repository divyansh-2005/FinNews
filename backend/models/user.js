const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required: function() { return !this.googleId; } // Password is required if googleId is not present
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true  // This allows the field to be unique but not required which is useful for Google sign-in
    }
}, {timestamps:true} );

module.exports = mongoose.model("User",userSchema);