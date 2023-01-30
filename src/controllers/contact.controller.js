const getAll = (req, res) => {
  res.render("contacts", {
    data: 10,
  })
}
module.exports = { getAll }
