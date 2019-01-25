const classify = require('../model/category')
const dataToTree = (data) => {
    const dataJson = {}
    const tree = []
    data.forEach((item, index) => {
        dataJson[item.categoryId] = Object.assign({}, item, {
            children: []
        })
    })
    for (let key in dataJson) {
        if (dataJson[key].parentid != 0) {
            dataJson[dataJson[key].parentid].children.push(dataJson[key])
        } else {
            tree.push(dataJson[key])
        }
    }
    return tree
}

const category = async(req, res, next) => {
    const data = await classify.selectCategory()
    res.json({
        code: 1,
        data: dataToTree(data)
    })
}

module.exports = {
    category
}