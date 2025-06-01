const express = require("express");
const {UsersController} = require("../controllers");
const router = express.Router();

// Роуты Users
router.post("/users/search", UsersController.search);
router.post("/users/select", UsersController.select);
router.post("/users/all-select", UsersController.allSelect);

module.exports = router;
