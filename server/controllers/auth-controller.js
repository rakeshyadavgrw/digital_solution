const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    res.status(200).send("welcome to  router to controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const userexist = await User.findOne({ email });
    if (userexist) {
      return res.status(400).json({ msg: "email already exits" });
    }

    // const hash_password = await bcrypt.hash(password, 10);

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({
      //.cookie("token",await userCreated.generateToken())
      message: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });

    // res.status(200).send("welcome to register to controller");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email }); //userexit me pura data hoga

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
}; 

// to send user data- User Logic

const user = async (req, res) => {
  try {
    const userData = req.user;

    res.status(200).json({ userData });
  } catch (error) {
    console.log(`error from the user route ${error}`);
  }
};

module.exports = { home, register, login, user };
