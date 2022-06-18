const express = require('express');
const controllers = require('./controllers');

const router = express.Router();

// router.get('/', (req, res) => (
//   res.send('HELLO FROM MVP')
// ));

router.get('/allProducts', controllers.getProducts);
router.get('/oneProduct', controllers.oneProduct);


module.exports = router;