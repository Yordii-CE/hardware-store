const getAll = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM product where type = 'tool'", (err, rows) => {
      if (err) {
        res.json(err)
      }

      res.render('tools', {
        data: rows,
      })
    })
  })
}
module.exports = { getAll }
