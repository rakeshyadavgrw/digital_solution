const express = require("express");
const router = express.Router();
// const {home ,register}= require("../controllers/auth-controller");
const authcontrollers = require("../controllers/auth-controller");
const validate = require("../middleware/validate_middleware");
const {signupSchema,signinSchema} = require("../validators/auth-validators");
const authMiddleware = require("../middleware/auth-middleware")

router.route("/").get(authcontrollers.home); //method 3st
router.route("/register").post(validate(signupSchema),authcontrollers.register);
router.route("/login").post(validate(signinSchema),authcontrollers.login);
router.route("/user").get(authMiddleware, authcontrollers.user);
// router.route("/").get(home);
// router.route("/register").get(register);
// router.get("/",home);
  
// router.route("/").get((req, res) => {            //method 2st
//   res.status(200).send("welcome to  router"); 
// });

// router.get("/", (req, res) => {                   //method 1st
//   res.status(200).send("welcome to  router");
// });

// router.get("/register", (req, res) => {
//   res.status(200).send("welcome to  register");
// });
module.exports = router;
