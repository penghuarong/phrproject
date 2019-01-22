'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const bodyParser = require("body-parser")
const mysql = require("mysql")
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
const data = require("../static/data/fruit.json");
const day17 = require("../static/data/day17.json");
const day18 = require("../static/data/day18.json");
const day19 = require("../static/data/day19.json");
const lunbo = require("../static/data/lunbo.json");
const devWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool,

    // these devServer options should be customized in /config/index.js
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
            ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll,
        },
        before(app) {
            const urlencodedparser = bodyParser.urlencoded({ extended: false });
            app.get("/api", (req, res) => {
                    res.end(JSON.stringify({ data: data }))
                }),
                app.get("/apiday17", (req, res) => {
                    res.end(JSON.stringify({ data: day17 }))
                }),
                app.get("/api/lunbo", (req, res) => {
                    res.end(JSON.stringify({ data: lunbo }))
                }),
                app.get("/apiday18", (req, res) => {
                    res.end(JSON.stringify({ data: day18 }))
                }),
                app.get("/apiday19", (req, res) => {
                    res.end(JSON.stringify({ data: day19 }))
                }),
                app.post("/userinfo", urlencodedparser, (req, res) => {
                    const pool = mysql.createPool({
                        host: "localhost",
                        user: "root",
                        password: "12345678",
                        database: "phr"
                    })
                    pool.getConnection((err, con) => {
                        con.query("select * from info where username=? and password=?", [req.body.username, req.body.password], (err, result) => {
                            if (err) {
                                res.json({ code: 1, msg: "error" });
                            } else {
                                res.json({ code: 0, result: result[0] })
                            }
                        })
                    })
                })

        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: config.dev.assetsSubDirectory,
            ignore: ['.*']
        }])
    ]
})

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port
                // add port to devServer config
            devWebpackConfig.devServer.port = port

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: config.dev.notifyOnErrors ?
                    utils.createNotifierCallback() : undefined
            }))

            resolve(devWebpackConfig)
        }
    })
})