const express = require('express')
const router = express.Router()

const multer = require('multer')
const storage = multer.diskStorage({
  destination: 'src/public/uploads/',
  filename: function (req, file, cb) {
    console.log('work server')
    cb('', file.originalname)
  },
})
const upload = multer({
  storage,
})
router.post(
  '/uploadProduct/:name/:price/:type/:url',
  upload.single('file'),
  (req, res) => {
    let product = req.params
    req.getConnection((err, conn) => {
      conn.query(
        `insert into product(name, url, price, type) 
      values(
          '${product.name}', 
          '${product.url}', 
          ${product.price}, 
          '${product.type}')`,
        (err, rows) => {
          if (err) {
            res.json({ status: 400, err })
          } else {
            res.json({ status: 200 })
          }
        }
      )
    })
  }
)

module.exports = router
