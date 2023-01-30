const getAll = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM product where type = 'accesorie'",
      (err, rows) => {
        if (err) {
          res.json(err)
        }
        res.render('accesories', {
          data: rows,
        })
      }
    )
  })
}
module.exports = { getAll }
