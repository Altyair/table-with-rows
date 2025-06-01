const express = require("express");
const {UsersController} = require("../controllers");
const router = express.Router();

// Роуты Users
router.post("/users/search", UsersController.search);
router.post("/users/select", UsersController.select);

module.exports = router;
