const express = require("express")
const router = express.Router()
const accesorieController = require("../controllers/accesorie.controller")
router.get("/accesories", accesorieController.getAll)

module.exports = router
