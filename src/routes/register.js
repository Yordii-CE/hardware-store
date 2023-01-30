const express = require("express")
let router = express.Router()
const registerController = require("./../controllers/register.controller")
router.get("/register", registerController.getPage)

module.exports = router
