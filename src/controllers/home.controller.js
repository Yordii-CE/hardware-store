const getAll = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM product', (err, rows) => {
      if (err) {
        res.json(err)
      }

      res.render('home', {
        data: 10,
      })
    })
  })
}
module.exports = { getAll }
