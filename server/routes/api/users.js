const express = require("express");
const usersCtrl = require("../../controllers/api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

const router = express.Router();

//post
router.post("/", usersCtrl.create);

router.post("/login", usersCtrl.login);

//will go into the middleware before going into the checkToken
router.get("/checked-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
