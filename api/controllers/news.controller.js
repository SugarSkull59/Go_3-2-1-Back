const News = require('../models/new.model')
const {
  handleError
} = require('../utils')

module.exports = {
  getAllNoticias,
}


function getAllNoticias(req, res) {
  const query = {}
  if (req.query.date) {
    query.date = req.query.date
  }
  News
    .find(query)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
