const mysql = require("mysql");
const connect = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "12345678",
    database: "train"
})
connect.connect((error) => {
    if (error) {
        console.log("链接失败")
    } else {
        console.log("链接成功")
    }
})
module.exports = connect