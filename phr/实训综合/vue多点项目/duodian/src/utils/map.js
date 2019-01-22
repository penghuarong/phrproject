import AMap from "AMap";
class Map {
    constructor() {
        this.aMap = {},
            this.placeSearch = "",
            AMap.plugin('AMap.PlaceSearch', () => {
                this.placeSearch = new AMap.PlaceSearch({
                    // city 指定搜索所在城市，支持传入格式有：城市名、citycode和adcode
                    city: '010'
                })
            })
    }
    geolocation() {
        return new Promise((resolve, reject) => {
            AMap.plugin('AMap.Geolocation', () => {
                var geolocation = new AMap.Geolocation({
                    // 是否使用高精度定位，默认：true
                    enableHighAccuracy: true,
                    // 设置定位超时时间，默认：无穷大
                    timeout: 10000,
                })
                geolocation.getCurrentPosition()
                AMap.event.addListener(geolocation, 'complete', (data) => {
                    resolve(data)
                        // this.$store.commit('user/SET_GPS', data)
                        // this.$router.push(this.$route.query.callback)
                })
                AMap.event.addListener(geolocation, 'error', (error) => {
                    reject(error)
                        // this.$router.push("/selectmap")
                })
            })
        })
    }
    search() {
        return new Promise((resolve, reject) => {
            this.placeSearch.search(val, function(status, result) {
                // 查询成功时，result即对应匹配的POI信息
                resolve(result)
            })
        })
    }
}
export default Map