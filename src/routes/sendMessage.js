const express = require("express")
const router = express.Router()
router.post("/sendMessage", (req, res) => {
  let sms = req.body
  console.log("sms", sms)

  req.getConnection((err, conn) => {
    conn.query(
      `INSERT INTO message(topic, correo, message, isManage)
         values(
             '${sms.topic}',
             '${sms.correo}',
             '${sms.message}',
             '${sms.isManage}'
          )`,
      (err, rows) => {
        if (err) {
          res.json({ status: 400, err })
        } else {
          res.json({ status: 200 })
        }
      }
    )
  })
})

module.exports = router
