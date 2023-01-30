const express = require("express")
const router = express.Router()
router.get("/updateMessage/:idMessage", (req, res) => {
  let idMessage = req.params.idMessage

  req.getConnection((err, conn) => {
    conn.query(
      `UPDATE message set isManage = 'yes' where id = ${idMessage}`,
      (err, rows) => {
        if (err) {
          res.json({ status: 400, err })
        } else {
          /*  res.json({ status: 200 }) */
          res.redirect("/manage-message")
        }
      }
    )
  })
})

module.exports = router
