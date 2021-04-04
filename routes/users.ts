import express from "express";
const userController = require("../controllers/users");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/checkToken", userController.checkToken);

module.exports = router;
