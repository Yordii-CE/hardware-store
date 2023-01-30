const express = require("express")
const router = express.Router()
const contactController = require("../controllers/contact.controller")
router.get("/contacts", contactController.getAll)

module.exports = router
