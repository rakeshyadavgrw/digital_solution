const express = require("express");
const {getAllUsers,getAllContacts, deleteuserdata, getuserdata, updateuserdata, deletecontactdata} = require("../controllers/admin-controller");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const router = express.Router();

router.route("/users").get(authMiddleware,adminMiddleware,getAllUsers);
router.route("/contacts").get(authMiddleware,adminMiddleware,getAllContacts)
router.route("/contact/delete/:id").delete(authMiddleware,adminMiddleware,deletecontactdata)
router.route("/user/delete/:id").delete(authMiddleware,adminMiddleware,deleteuserdata)
router.route("/user/data/:id").get(authMiddleware,adminMiddleware,getuserdata)
router.route("/user/update/:id").patch(authMiddleware,adminMiddleware,updateuserdata)

module.exports = router; 