const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        docTitle: 'Add Product', path: '/admin/add-product'});
});

// /admin/product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title, price: req.body.price });
    res.redirect('/');
});

module.exports.routes = router;
module.exports.products = products;