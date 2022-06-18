const { key, host } = require('../../config.js');


const allProducts = {
    method: 'GET',
    url: 'https://sephora.p.rapidapi.com/products/list',
    params: {categoryId: 'cat150006', pageSize: '60', currentPage: '1'},
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': host
    }
}

 const oneProduct = {
  method: 'GET',
  url: 'https://sephora.p.rapidapi.com/products/detail',
  params: {productId: 'P442563', preferedSku: '2210607'},
  headers: {
    'X-RapidAPI-Key': key,
    'X-RapidAPI-Host': host
  }
};
module.exports = {allProducts, oneProduct };