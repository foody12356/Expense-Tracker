const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

const router = express.Router();

//routers post for login user
router.post("/login", loginController);

//post for register users
router.post("/register", registerController);
module.exports = router;
