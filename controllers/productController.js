const User = require('./../models/user');
const Product = require('./../models/product');

// Create Product
function createProducts(req, res){
    const newProduct = new Product({name: req.body.name, price: req.body.price});
    newProduct.save(function(err, data){
        if(err) return res.status(422).json({error: err});

        res.status(200).json(data);
    })
}

// Show by Id
function showProductId(req, res){
    Product.findById(req.params.id).then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        if(err) return res.status(422).json({error: err});
    })
}


// Show All Products
function showAllProducts(req, res){
    Product.find({}).then((data)=>{
        res.status(200).json(data)
    })
    .catch((err)=>{
        if(err) return res.status(422).json({error: err});
    })
} 









module.exports = {createProducts, showProductId, showAllProducts};

