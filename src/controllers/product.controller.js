const getAll = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM product', (err, rows) => {
      if (err) {
        res.json(err)
      }

      res.render('products', {
        data: rows,
      })
    })
  })
}

const _delete = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query(
      `DELETE FROM product where id = ${req.params.id}`,
      (err, rows) => {
        if (err) {
          res.json(err)
          res.json({ status: 400 })
        }

        res.json({ status: 200 })
      }
    )
  })
}
module.exports = { getAll, _delete }
