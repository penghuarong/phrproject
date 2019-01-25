let path = require("path");
let extractTextWebpackPlugin = require("extract-text-webpack-plugin");
let htmlWebpackPlugin = require("html-webpack-plugin");
let { VueLoaderPlugin } = require("vue-loader");
let data = require("./static/data/data.json");
let shopcar = require("./static/data/shopcar.json");
let tabdata = require("./static/data/tab.json");
let axios = require("axios");
module.exports = {
    mode: "development",
    entry: path.join(__dirname, "./src/app.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js"
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                // loader: ["style-loader", "css-loader"]
                use: extractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                // loader: ["style-loader", "css-loader"]
                use: extractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: ["scss-loader", "node-sass"]
                })
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(jpg|png|gif|jpeg|eot|svg|ttf|woff|woff2)$/,
                loader: "url-loader"
            }
        ]
    },
    devServer: {
        host: "localhost",
        port: "8888",
        before(app) {
            app.get("/api", (req, res) => {
                    res.end(JSON.stringify({ data: data }))
                }),
                app.get("/CarouselList", (req, response) => {
                    const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1536638295343";
                    axios.get(url, {
                        headers: {
                            origin: "https://y.qq.com",
                            referer: "https://y.qq.com/m/index.html"
                        }
                    }).then((result) => {
                        response.end(JSON.stringify({ code: 0, data: result.data.data.slider }))
                            // result.json({ code: 0, data: result.data.data.slider })
                    }).catch((err) => {
                        console.log(2);
                        response.end(JSON.stringify({ code: 1, msg: "error" }))
                            // result.json({ code: 1, err: "error" })
                    })
                }),
                app.get("/shopcar", (req, response) => {
                    response.end(JSON.stringify({ data: shopcar }))
                }),
                app.get("/tabam", (req, response) => {
                    response.end(JSON.stringify({ data: tabdata }))
                })
        }
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },
    plugins: [
        new extractTextWebpackPlugin("index.css"),
        new htmlWebpackPlugin({
            title: "demo",
            filename: "index.html",
            template: "./index.html",
            inject: true
        }),
        new VueLoaderPlugin()
    ]
}