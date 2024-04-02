const express = require("express");
const router = express.Router();
const userRoutes = require("./user");
const accountRoutes = require("./account");

router.use("/user", userRoutes);
router.use("/account", accountRoutes);

module.exports = router;