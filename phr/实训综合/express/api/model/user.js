const db = require('../../db')
const selectUser = (phone) => {
    return new Promise((resolve) => {
        const sql = `select * from user where phone=${phone}`
        db.query(sql, [], (error, data) => {
            if (data) {
                resolve(Array.from(data))
            } else {
                resolve([])
            }
        })
    })
}



//是对象的情况
// function add(data, parentid) {
//     let sql = 'insert into classifydata (categoryImgPathReal,categoryName,parentid) values (?,?,?)'
//     for (let i = 0; i < data.length; i++) {
//         db.query(sql, [
//             data[i].categoryImgPathReal,
//             data[i].categoryName,
//             parentid
//         ], (error, res) => {
//             if (!error) {
//                 console.log("成功")
//                 if (data[i].childCategoryList.length >= 1) {
//                     add(data[i].childCategoryList, res.insertId)
//                 }
//             }
//         })
//     }
// }
// add(data.data.wareCategory[0].categoryList, 1)

// const Getcategory = (datalist, parentid) => {
//     const sql = 'insert into classifydata (categoryName, categoryImgPathReal,parentid) values (?, ?, ?)'
//     for (let i = 0; i < datalist.length; i++) {
//         db.query(sql, [
//             datalist[i].categoryName,
//             datalist[i].categoryImgPathReal,
//             parentid
//         ], (error, res) => {
//             if (!error) {
//                 console.log('插入成功')
//                 if (datalist[i].childCategoryList.length >= 1) {
//                     Getcategory(datalist[i].childCategoryList, res.insertId)
//                 }
//             } else {
//                 console.log(error)
//             }
//         })
//     }
// }
// Getcategory(data.data.wareCategory[1].categoryList, 2)

module.exports = {
    selectUser
}