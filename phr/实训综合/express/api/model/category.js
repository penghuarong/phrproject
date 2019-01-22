const db = require('../../db')
const selectCategory = () => {
    return new Promise((resolve) => {
        const sql = `select * from classifydata`
        db.query(sql, [], (error, data) => {
            if (data) {
                resolve(Array.from(data))
            } else {
                resolve([])
            }
        })
    })
}

const getChild = (parentId) => {
    return new Promise((resolve) => {
        const sql = `select * from classifydata where parentid=${parentId}`;
        db.query(sql, [], (error, data) => {
            resolve(data)
        })
    })
}

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

const ChildrenId = (treeData, parentId) => {
    let data = {};
    for (var i = 0; i < treeData.length; i++) {
        const item = treeData[i];
        if (item.categoryId == parentId) {
            data = item;
            break;
        }
    }
    if (Object.keys(data).length <= 0) {
        for (var i = 0; i < treeData.length; i++) {
            const item = treeData[i];
            if (item.children.length >= 1) {
                data = ChildrenId(item.children, parentId)
                if (Object.keys(data).length >= 1) {
                    break;
                }
            }
        }
    }
    return data
}

const getChildIds = (() => {
    let childrenids = [];

    return childIds = (child, d) => {
        if (!d) {
            childrenids = []
        }
        if (child.children && child.children.length >= 1) {
            child.children.forEach((item) => {
                childIds(item, 'aaaa')
            })
        } else {
            childrenids.push(child.categoryId)
        }
        return childrenids
    }
})()

const getChildId = (parentid) => {
    return new Promise((resolve) => {
        const sql = `select * from classifydata`;
        db.query(sql, [], (error, data) => {
            const treeData = dataToTree(data)
            const children = ChildrenId(treeData, parentid)
            const ids = getChildIds(children)
            resolve(ids)
        })
    })
}
module.exports = {
    selectCategory,
    getChild,
    getChildId
}