var express = require('express');
var router = express.Router();
var multer = require("multer");
var path = require("path");
var userController = require('./controller/user')
var middware = require('./middware/verifyToken')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/uploadImgs')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
var upload = multer({ storage: storage })

router.post('/user/login_do', userController.login_do);
router.get('/user/info', middware, userController.info);
router.get('/user/fruitlist', userController.selectFruit);
router.post('/user/page', userController.page);
console.log(555)
router.post('/upload', upload.single('file'), (req, res) => {
    console.log(123)
    res.json({
        msg: '上传成功',
        url: req.file.path
    })
})
module.exports = router;