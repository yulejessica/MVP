var models = require('../models/index.js');
const axios = require('axios');

module.exports = {
  getProducts: (req, res) => {
    axios.request(models.allProducts)
        .then(function (response) {
            // console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(function (error) {
            console.error(error);
            res.status(404).send(error);
        });
  },
  oneProduct: (req, res) => {
    axios.request(models.oneProduct)
        .then(function (response) {
            // console.log(response.data);
            res.status(200).send(response.data);
        })
        .catch(function (error) {
            console.error(error);
            res.status(404).send(error);
        });
  }

}

