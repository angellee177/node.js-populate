const User = require('./../models/user');
const Product = require('./../models/product');

function getUserProduct(req, res){
    User.findById(req.params.id).populate('products')
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        if(err) return res.status(422).json({error: err})
    })
}

// Function Create
function createUser(req, res){
   const newUser = new User({name: req.body.name, email: req.body.email});
   newUser.save(function(err, data){
    if(err) return res.status(422).json({error: err});

    res.status(201).json(data);
   })
}


// Function Show By Id
function showUserId(req, res){
    User.findById(req.params.id).then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        if(err) return res.status(422).json({error: err});
    })
}


// Function show List User
function showAllUser(req, res){
    User.find({}).then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        if(err) return res.status(422).json({error: err});
    })
}


// Function Update 
function updateUser(req, res){
    Product.create(req.body).then((data)=>{
        User.findById(req.params.id, (err, user)=>{
            user.products.push(data)
            user.save((err,data)=>{
                if(err) return res.status(422).json({error: err});

                res.status(200).json(data);
            })
        })
    })
}


// Function Delete
function deleteUser(req, res){
    User.findByIdAndDelete(req.params.id, 
        function(err, data){
            if(err) return res.status(422).json({error: err});

            res.status(200).json("successfully Deleted!!")
    })
}


module.exports = {createUser, updateUser, showUserId, showAllUser, deleteUser, getUserProduct};



