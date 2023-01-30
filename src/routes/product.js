const express = require('express')
const router = express.Router()
const { getAll, _delete } = require('../controllers/product.controller')

router.get('/products', getAll)
router.delete('/products/:id', _delete)

module.exports = router
