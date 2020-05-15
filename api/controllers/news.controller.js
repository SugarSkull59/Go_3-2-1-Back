const News = require('../models/new.model')
const {
  handleError
} = require('../utils')

module.exports = {
  getAllNoticias,
  getNoticia
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

function getNoticia(req, res) {
  News
    .findById(req.params.id)
    .then(noticia => res.json(noticia))
    .catch((err) => handleError(err, res))
}