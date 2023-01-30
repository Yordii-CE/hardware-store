const express = require("express")
const router = express.Router()
router.post("/client", (req, res) => {
  let client = req.body

  req.getConnection((err, conn) => {
    conn.query(
      `INSERT INTO client(user, password) values('${client.user}','${client.password}')`,
      (err, rows) => {
        if (err) {
          res.json({ status: 400, err })
        } else {
          res.redirect("/tools")
        }
      }
    )
    console.log(client)
  })
})

router.get("/client/:user/:pass", (req, res) => {
  let user = req.params.user
  let pass = req.params.pass

  req.getConnection((err, conn) => {
    conn.query(
      `select * from client 
    where user = '${user}' && password = '${pass}'`,
      (err, rows) => {
        if (err) {
          res.json({ status: 400, err })
        } else {
          res.json({ status: rows.length > 0 ? 200 : 400 })
        }
      }
    )
  })
})

module.exports = router
