const db = require('../../db')
const selectBanner = (dataType) => {
    return new Promise((resolve) => {
        const sql = `select * from banner where dataType=${dataType}`
        db.query(sql, [], (error, data) => {
            if (data) {
                resolve(Array.from(data))
            } else {
                resolve([])
            }
        })
    })
}
const selectNav = (dataType) => {
    return new Promise((resolve) => {
        const sql = `select * from nav where dataType=${dataType}`
        db.query(sql, [], (error, data) => {
            if (data) {
                resolve(Array.from(data))
            } else {
                resolve([])
            }
        })
    })
}
module.exports = {
    selectBanner,
    selectNav
}

//数组的录入数据库
// const sql = 'insert into nav (brandId,dataType,imageUrl,resource,remark) values (?,?,?,?,?)';
// aaaaa.forEach((item, index) => {
//     console.log(item, 9090)
//     db.query(sql, [
//         item.brandId,
//         item.dataType,
//         item.imageUrl,
//         item.resource,
//         item.remark
//     ], () => {
//         console.log("成功!!")
//     })
// })