const getAll = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM message', (err, rows) => {
      if (err) {
        res.json(err)
      }

      res.render('manage-message', {
        data: rows,
      })
    })
  })
}
module.exports = { getAll }
