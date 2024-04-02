const express = require("express");
const router = express.Router();

const { signup, login, updateUser, getUsers } = require("../controllers/Auth");
const { authUser } = require("../middlewares/auth");

router.post("/signup", signup);
router.post("/login", login);
router.put("/update", authUser, updateUser);
router.get("/getUsers", getUsers);


module.exports = router;