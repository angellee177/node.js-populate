const router = require('express').Router();
const userController = require('./../controllers/userController');

router.post('/create', userController.createUser);
router.post('/delete/:id', userController.deleteUser);
router.get('/userProduct/:id', userController.getUserProduct);
router.get('/show/:id',userController.showUserId);
router.get('/show',    userController.showAllUser)
router.put('/update/:id', userController.updateUser);


module.exports = router;
