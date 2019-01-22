const db = require('../../db')
const category = require("./category")
    // const selectProduct = ({
    //         page,
    //         page_size,
    //         category_id
    //     }) => {
    //         return new Promise((resolve, reject) => {
    //             const categoryids = category.getChildId(category_id)
    //             const sql = `select * from product where categoryId=${category_id} limit ${page},${page_size}`
    //             db.query(sql, [], (error, res) => {
    //                 if (error) {
    //                     console.log(11)
    //                     reject()
    //                 } else {
    //                     console.log(res, 123)
    //                     resolve(Array.from(res))
    //                 }
    //             })
    //         })
    //     }
const selectProduct = async({
    page,
    page_size,
    category_id,
}) => {
    const categoryids = await category.getChildId(category_id)
    let sql = `select * from product where categoryId in (${categoryids.toString()}) limit ${page - 1}, ${page_size}`
        // const filters = JSON.parse(filter)
        // if (Object.keys(filters).length >= 1) {
        //     sql += ` order by `
        //     for (let key in filters) {
        //         sql += `${key} ${filters[key]}, `
        //     }
        //     sql = sql.substr(0, sql.length - 2)
        // }
        // sql += ` limit ${(page-1)*page_size}, ${page_size} `
        // console.log(sql)
    return new Promise((resolve, reject) => {
        db.query(sql, [], (error, res) => {
            if (error) {
                reject()
            } else {
                resolve(Array.from(res))
            }
        })
    })
}

const selectItem = (id) => {
    const sql = `select * from product where id=${id}`
    return new Promise((resolve, reject) => {
        db.query(sql, [], (error, res) => {
            if (error) {
                reject()
            } else {
                resolve(Array.from(res)[0])
            }
        })
    })
}

const updateProduct = (options, id) => {
    let sql = `update product set `
    for (let key in options) {
        sql += key + '=' + options[key] + ',';
    }
    sql = sql.substr(0, sql.length - 1);

    sql += ` where id = '${id}'`
    console.log(sql)
    return new Promise((resolve, reject) => {
        db.query(sql, [], (error, res) => {
            if (error) {
                reject()
            } else {
                resolve()
            }
        })
    })
}

module.exports = {
    selectProduct,
    updateProduct,
    selectItem
}