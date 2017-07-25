const express = require('express');
const router = express();
const db = require('../db');
const path = require('path');

router.get('/:name/products', function(req, res){
    var category = req.params.name;
    // console.log(category);
    res.render('products', {categoryName: category,
                            categories: db.getCategoryNames(),
                            products: db.getProductsByCategory(category)});
});

// Delete category
router.delete('/:name', function(req, res){
    var category = req.params.name;
    db.deleteCategory(category);
    res.redirect('/');
});

// Delete product
router.delete('/:name/products/:id', function(req, res){
    var category = req.params.name;
    var productId = parseInt(req.params.id);
    db.deleteProduct(category, productId);
    res.redirect(`/categories/${category}/products`);
});

// Create Category
router.post('/', function(req, res){
    var category = req.body.categoryName;
    db.createCategory(category);
    res.redirect(`/categories/${category}/products`);
});

// Create Product
router.post('/:name/products', function(req, res){
    var category = req.params.name;
    db.createProduct(category, req.body.productName);
    res.redirect(`/categories/${category}/products`);
});
module.exports = router;
