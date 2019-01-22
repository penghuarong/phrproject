const db = require('../../db')

/**
 * 增删改查
 */

const selectUser = (phone, password) => {
    return new Promise((resolve, reject) => {
        const sql = `select * from admin where phone=${phone} and password=${password}`
        db.query(sql, [], (error, data) => {
            if (data) {
                resolve(Array.from(data)[0])
            } else {
                reject([])
            }
        })
    })
}
const selectFruit = () => {
    return new Promise((resolve, reject) => {
        const sql = `select * from fruitlist`
        db.query(sql, [], (error, data) => {
            // let count = Math.ceil(data.length / 5);//一共6页 每页5条
            if (data) {
                resolve(Array.from(data))
            } else {
                reject([])
            }
        })
    })
}
const page = (min, max) => {
    return new Promise((resolve, reject) => {
        const sql = `select * from fruitlist limit ${min},${max}`
        console.log(min, max, "22222222222")
        db.query(sql, [], (err, data) => {
            console.log(data, "11111111111")
            if (data) {
                resolve(Array.from(data))
            } else {
                reject([])
            }
        })
    })
}
module.exports = {
        selectUser,
        selectFruit,
        page
    }
    // const data = [{
    //             "msg": 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1134240306,2186212281&fm=27&gp=0.jpg',
    //             "price": 10,
    //             "volumn": 100,
    //             "store": 200,
    //             "status": "上架",
    //             "updatatime": "2018-11-4"
    //         },
    //         {
    //             "msg": 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1376299474,3966427385&fm=27&gp=0.jpg',
    //             "price": 10.5,
    //             "volumn": 20,
    //             "store": 300,
    //             "status": "上架",
    //             "updatatime": "2018-12-22"
    //         }, {
    //             "msg": 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2229908779,188094536&fm=27&gp=0.jpg',
    //             "price": 20,
    //             "volumn": 90,
    //             "store": 300,
    //             "status": "上架",
    //             "updatatime": "2018-12-21"
    //         }, {
    //             "msg": 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3941718376,2643720830&fm=27&gp=0.jpg',
    //             "price": 100,
    //             "volumn": 1000,
    //             "store": 2000,
    //             "status": "上架",
    //             "updatatime": "2018-11-2"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451799&di=69418985ce0bac14081e439282e6e71f&imgtype=0&src=http%3A%2F%2Fimg4.3lian.com%2Fimg2005%2F07%2F08%2F31.jpg',
    //             "price": 30,
    //             "volumn": 400,
    //             "store": 900,
    //             "status": "上架",
    //             "updatatime": "2018-11-1"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451798&di=7730e405c7ae7684e905003cfc178231&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F58db441dcbeb3.jpg',
    //             "price": 10,
    //             "volumn": 100,
    //             "store": 200,
    //             "status": "上架",
    //             "updatatime": "2018-12-10"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451798&di=31f6eb984f469da67870693edd95f92b&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20160321%2Fbaisebeijingshangdejiezi_6031162.jpg',
    //             "price": 10,
    //             "volumn": 1000,
    //             "store": 700,
    //             "status": "上架",
    //             "updatatime": "2018-12-9"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451795&di=54f9a0265115dd477dd7045297e9896f&imgtype=0&src=http%3A%2F%2Fpic17.photophoto.cn%2F20101105%2F0035035511519052_b.jpg',
    //             "price": 70,
    //             "volumn": 500,
    //             "store": 800,
    //             "status": "上架",
    //             "updatatime": "2018-12-8"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451795&di=e452bcad37ab1b5f1a9355f4923e0aff&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F17%2F78%2F95%2F17789501-8cbfe8a566fbf144bc2491814492da60-1.jpg',
    //             "price": 3.5,
    //             "volumn": 100,
    //             "store": 500,
    //             "status": "上架",
    //             "updatatime": "2018-12-7"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451793&di=7b852b226e7eb6d647e074d92915b84b&imgtype=0&src=http%3A%2F%2Fimg008.hc360.cn%2Fm1%2FM05%2FA7%2F03%2FwKhQb1QozRSERb0JAAAAAF-Ubs4951.jpg',
    //             "price": 10.9,
    //             "volumn": 100,
    //             "store": 270,
    //             "status": "上架",
    //             "updatatime": "2018-12-6"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451791&di=77f749c845deec479c0fe89416ff3f22&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1510%2F08%2Fc3%2F13629805_1444255066795_mthumb.jpg',
    //             "price": 11.4,
    //             "volumn": 120,
    //             "store": 290,
    //             "status": "上架",
    //             "updatatime": "2018-12-5"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886497885&di=19e8cc88ce955f929ea4774efe24ddcb&imgtype=0&src=http%3A%2F%2Fimg.114mall.com%2Fgroup1%2FM00%2F10%2F15%2FwKhSIVV-i9-AGt-ZAAj4q1HqwzM87..jpg',
    //             "price": 5.5,
    //             "volumn": 50,
    //             "store": 200,
    //             "status": "上架",
    //             "updatatime": "2018-12-4"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886497884&di=c6f7cc2c5c51ab3f51db6ff6d43a1a7a&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fm1%2FM04%2FA7%2F59%2FwKhQb1Qo0NeEWDuoAAAAAG_SWwE820.jpg',
    //             "price": 6.6,
    //             "volumn": 60,
    //             "store": 440,
    //             "status": "上架",
    //             "updatatime": "2018-12-3"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886497883&di=6de792f78ad7c647f24502379192f7ab&imgtype=0&src=http%3A%2F%2Fimg14.hc360.cn%2F14%2Fbusin%2F171%2F500%2Fb%2F14-171500324.jpg',
    //             "price": 9.9,
    //             "volumn": 50,
    //             "store": 400,
    //             "status": "上架",
    //             "updatatime": "2018-12-2"
    //         }, {
    //             "msg": 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1134240306,2186212281&fm=27&gp=0.jpg',
    //             "price": 10,
    //             "volumn": 100,
    //             "store": 200,
    //             "status": "上架",
    //             "updatatime": "2018-11-4"
    //         },
    //         {
    //             "msg": 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1376299474,3966427385&fm=27&gp=0.jpg',
    //             "price": 10.5,
    //             "volumn": 20,
    //             "store": 300,
    //             "status": "上架",
    //             "updatatime": "2018-12-22"
    //         }, {
    //             "msg": 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2229908779,188094536&fm=27&gp=0.jpg',
    //             "price": 20,
    //             "volumn": 90,
    //             "store": 300,
    //             "status": "上架",
    //             "updatatime": "2018-12-21"
    //         }, {
    //             "msg": 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3941718376,2643720830&fm=27&gp=0.jpg',
    //             "price": 100,
    //             "volumn": 1000,
    //             "store": 2000,
    //             "status": "上架",
    //             "updatatime": "2018-11-2"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451799&di=69418985ce0bac14081e439282e6e71f&imgtype=0&src=http%3A%2F%2Fimg4.3lian.com%2Fimg2005%2F07%2F08%2F31.jpg',
    //             "price": 30,
    //             "volumn": 400,
    //             "store": 900,
    //             "status": "上架",
    //             "updatatime": "2018-11-1"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451798&di=7730e405c7ae7684e905003cfc178231&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F0%2F58db441dcbeb3.jpg',
    //             "price": 10,
    //             "volumn": 100,
    //             "store": 200,
    //             "status": "上架",
    //             "updatatime": "2018-12-10"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451798&di=31f6eb984f469da67870693edd95f92b&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20160321%2Fbaisebeijingshangdejiezi_6031162.jpg',
    //             "price": 10,
    //             "volumn": 1000,
    //             "store": 700,
    //             "status": "上架",
    //             "updatatime": "2018-12-9"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451795&di=54f9a0265115dd477dd7045297e9896f&imgtype=0&src=http%3A%2F%2Fpic17.photophoto.cn%2F20101105%2F0035035511519052_b.jpg',
    //             "price": 70,
    //             "volumn": 500,
    //             "store": 800,
    //             "status": "上架",
    //             "updatatime": "2018-12-8"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451795&di=e452bcad37ab1b5f1a9355f4923e0aff&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F17%2F78%2F95%2F17789501-8cbfe8a566fbf144bc2491814492da60-1.jpg',
    //             "price": 3.5,
    //             "volumn": 100,
    //             "store": 500,
    //             "status": "上架",
    //             "updatatime": "2018-12-7"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451793&di=7b852b226e7eb6d647e074d92915b84b&imgtype=0&src=http%3A%2F%2Fimg008.hc360.cn%2Fm1%2FM05%2FA7%2F03%2FwKhQb1QozRSERb0JAAAAAF-Ubs4951.jpg',
    //             "price": 10.9,
    //             "volumn": 100,
    //             "store": 270,
    //             "status": "上架",
    //             "updatatime": "2018-12-6"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886451791&di=77f749c845deec479c0fe89416ff3f22&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1510%2F08%2Fc3%2F13629805_1444255066795_mthumb.jpg',
    //             "price": 11.4,
    //             "volumn": 120,
    //             "store": 290,
    //             "status": "上架",
    //             "updatatime": "2018-12-5"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886497885&di=19e8cc88ce955f929ea4774efe24ddcb&imgtype=0&src=http%3A%2F%2Fimg.114mall.com%2Fgroup1%2FM00%2F10%2F15%2FwKhSIVV-i9-AGt-ZAAj4q1HqwzM87..jpg',
    //             "price": 5.5,
    //             "volumn": 50,
    //             "store": 200,
    //             "status": "上架",
    //             "updatatime": "2018-12-4"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886497884&di=c6f7cc2c5c51ab3f51db6ff6d43a1a7a&imgtype=0&src=http%3A%2F%2Fimg000.hc360.cn%2Fm1%2FM04%2FA7%2F59%2FwKhQb1Qo0NeEWDuoAAAAAG_SWwE820.jpg',
    //             "price": 6.6,
    //             "volumn": 60,
    //             "store": 440,
    //             "status": "上架",
    //             "updatatime": "2018-12-3"
    //         }, {
    //             "msg": 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545886497883&di=6de792f78ad7c647f24502379192f7ab&imgtype=0&src=http%3A%2F%2Fimg14.hc360.cn%2F14%2Fbusin%2F171%2F500%2Fb%2F14-171500324.jpg',
    //             "price": 9.9,
    //             "volumn": 50,
    //             "store": 400,
    //             "status": "上架",
    //             "updatatime": "2018-12-2"
    //         }
    //     ]
    // const sql = 'insert into fruitlist (msg,price,volumn,store,status,updatatime) values (?,?,?,?,?,?)';
    // data.forEach((item, index) => {
    //     console.log(item, 9090)
    //     db.query(sql, [
    //         item.msg,
    //         item.price,
    //         item.volumn,
    //         item.store,
    //         item.status,
    //         item.updatatime
    //     ], () => {
    //         console.log("成功!!")
    //     })
    // })