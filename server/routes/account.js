const express = require("express");
const router = express.Router();

const { balance, transfer } = require("../controllers/Account");
const { authUser } = require("../middlewares/auth");

router.get("/balance", authUser, balance);
router.post("/transfer", authUser, transfer);


module.exports = router;