var express = require('express');
var router = express.Router();
const homeController = require('./controller/home');
const userController = require('./controller/user');
const categoryController = require('./controller/category');
const productController = require('./controller/product');
const verifyToken = require('./middware/verifyToken')
const cartController = require('./controller/cart');

router.get('/home/banner', homeController.banner)
router.get('/home/nav', homeController.nav)
router.get('/user/get_msg_code', userController.getMsgCode)
router.get('/user/login_in', verifyToken, userController.login_in)
router.get('/category/category', categoryController.category)
router.get('/product/product', productController.selectProduct)

module.exports = router;