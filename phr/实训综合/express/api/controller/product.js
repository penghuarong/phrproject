const product = require('../model/product')

const selectProduct = async(req, res, next) => {
    const {
        page = 1,
            page_size = 10,
            category_id
    } = req.query;
    const data = await product.selectProduct({
        page,
        page_size,
        category_id
    })

    res.json({
        code: 1,
        data
    })
}

module.exports = {
    selectProduct
}