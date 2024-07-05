const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {pageTitle: 'Shop', products: products, path: '/'});
});

module.exports = router;
