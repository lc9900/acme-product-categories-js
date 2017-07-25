  // - getCategoryNames
  // - getProductsByCategory
  // - createProduct
  // - deleteProduct
  // - updateProduct
  // - deleteCategory
  // - createCategory

var data = {
    "Food Category": [
        {name: 'Lucky Charm', id: 1},
        {name: 'Caesar Salad', id: 2},
    ],
    "Book Category": [
        {name: 'Book1', id: 1},
        {name: 'Book2', id: 2},
    ]
};

function deleteCategory(category){
    delete data[category];
}

function createCategory(name){
    data[name] = [];
}

function deleteProduct(category, productId){
    data[category] = data[category].filter(function(product){
        return product.id !== productId;
    });
    // console.log(data[category]);
}

function getProductsByCategory(category){
    return data[category];
}

function getCategoryNames(){
    return Object.keys(data);
}

function createProduct(category, productName){
    var product = {
                    name: productName,
                    id: data[category].length+1
                };
    data[category].push(product);
    // console.log(data[category]);
}

module.exports = {
    getProductsByCategory: getProductsByCategory,
    getCategoryNames: getCategoryNames,
    createProduct: createProduct,
    deleteProduct: deleteProduct,
    createCategory: createCategory,
    deleteCategory: deleteCategory
};
