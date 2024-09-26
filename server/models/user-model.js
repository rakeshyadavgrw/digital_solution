const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// secure the password with bcryptjs
userSchema.pre("save", async function (next) {
  const user = this; //this is the userdata h jo database me store hone wala hai body se mil ra h
  
  if (!user.isModified("password")) {    //ye true or false value return karega
    next(); // agar password modified h to database pe store kar do 
  }

  try {
    const saltRound = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, saltRound);  //yaha password ko hash kiya ja ra h
    user.password = hash_password; //yaha password update ho gaya
  } catch (error) {
    next(error);
  }
}); 

// compare password
userSchema.methods.comparePassword = async function (password){
  return bcrypt.compare(password, this.password);
  
}

// json web token

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const User = new mongoose.model("User", userSchema); //User is database name

module.exports = User;
 