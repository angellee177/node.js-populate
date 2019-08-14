const router = require('express').Router();
const productController = require('./../controllers/productController');

router.post('/create', productController.createProducts);
router.get('/show/:id', productController.showProductId);
router.get('/show',     productController.showAllProducts);


module.exports = router;

