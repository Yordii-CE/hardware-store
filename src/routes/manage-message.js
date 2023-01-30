const express = require('express')
const router = express.Router()
const manageMessageController = require('../controllers/manage-message.controller')

router.get('/manage-message', manageMessageController.getAll)

module.exports = router
