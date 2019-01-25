<template>
    <div id="map">
        正在定位
    </div>
</template>
<script>
    import AMap from "AMap";
    export default {
        data() {
            return {

            }
        },
        mounted() {
            var map = new AMap.Map("map");

            AMap.plugin('AMap.Geolocation', () => {
                var geolocation = new AMap.Geolocation({
                    // 是否使用高精度定位，默认：true
                    enableHighAccuracy: true,
                    // 设置定位超时时间，默认：无穷大
                    timeout: 10000,
                })
                geolocation.getCurrentPosition()
                AMap.event.addListener(geolocation, 'complete', (data) => {
                    this.$store.commit('user/SET_GPS', data)
                    this.$router.push(this.$route.query.callback)
                })
                AMap.event.addListener(geolocation, 'error', () => {
                    this.$router.push("/selectmap")
                })
            })
        }
    }
</script>
<style lang="scss" scoped>
    #map {
        width: 100%;
        height: 200px;
    }
</style>