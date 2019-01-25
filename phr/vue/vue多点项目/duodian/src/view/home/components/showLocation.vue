<template>
    <div class="location_box">
        <router-link href="javascript:;" class="location" to="/selectmap">
            <span ref="changeAdd">
                {{gps_location.addressComponent.street + '-' + gps_location.addressComponent.neighborhood}}
            </span>
        </router-link>
    </div>
</template>
<script>
    import {
        mapState
    } from "vuex";
    export default {
        name: "ShowLocation",
        props: ["changeAddress"],
        computed: {
            ...mapState('user', ['gps_location'])
        },
        mounted() {
            this.$refs.changeAdd.innerHTML = this.changeAddress
        }
    }
</script>
<style lang="scss" scoped>
    .location_box {
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        .location {
            font-size: 14px;
            color: rgba(0, 0, 0, .5);
            line-height: 35px;
        }
    }
</style>