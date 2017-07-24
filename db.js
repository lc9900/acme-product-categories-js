var data = {
    "Food Category": [
        {name: 'Lucky Charm', id: 1},
        {name: 'Lucky Charm', id: 2},
    ],
    "Book Category": [
        {name: 'Book1', id: 1},
        {name: 'Book2', id: 2},
    ]
};


function getProductsByCategory(category){
    return data[category];
}

function getAllCategories(){
    return Object.keys(data);
}

module.exports = {
    getProductsByCategory: getProductsByCategory,
    getAllCategories: getAllCategories
};







/////////////////////////////////////////////
// function add(name, rating){
//     var newProduct = {
//         id: counter++,
//         name: name,
//         rating: rating
//     };
//     data.push(newProduct);
// };

// // Base on product ID, returns the product
// function findById(id){
//     return data.filter(function(obj){
//         return obj.id === id;
//     })[0];
// };

// function remove(id){
//     data = data.filter(function(obj){
//         return obj.id !== id;
//     });
// };

// // Returns data[index] which is an object who has the max rating in all products
// function maxRating(){
//     return data.reduce(function(maxObj, obj){
//         if(obj.rating > maxObj.rating) maxObj = obj;
//         return maxObj;
//     });
// }

// function listAll(){
//     return data;
// }

// module.exports = {
//     add: add,
//     findById: findById,
//     remove: remove,
//     maxRating: maxRating,
//     listAll: listAll
// };

// Test code
// console.log(findById(2));
// remove(2);
// console.log(data);
// console.log(findById(2));
// console.log(findById(3));

// console.log(maxRating());
// remove(4)
// console.log(maxRating());
