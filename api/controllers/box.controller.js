const Box = require('../models/box.model')
const {
  handleError
} = require('../utils')

module.exports = {
  getAllBoxes,
  getBox,
}


function getAllBoxes(req, res) {
  const query = {}
  if (req.query.country) {
    query.country = req.query.country
  }

  if (req.query.province) {
    query.province = req.query.province
  }
  console.log("boxes");
  Box
    .find(query)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}


function getBox(req, res) {
  Box
    .findById(req.params.id)
    .then(box => res.json(box))
    .catch((err) => handleError(err, res))
}
