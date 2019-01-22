const proxy = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(proxy(
        "/analysisv2", {
            "target": "http://api.data.cqxcx.net",
            "changeOrigin": true
        }
    ))
    app.use(proxy(
        "/api", {
            "target": "http://localhost:3000",
            "changeOrigin": true
        }
    ))
}