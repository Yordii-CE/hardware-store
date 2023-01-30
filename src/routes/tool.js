const express = require("express")
const router = express.Router()
const productController = require("../controllers/tool.controller")
router.get("/tools", productController.getAll)

module.exports = router
