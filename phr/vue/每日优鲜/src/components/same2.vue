<template>
    <div>
        <p><span>单件：</span><span>{{price}}</span><button @click="downPrice">降价一元</button></p>
        <p>数量：{{count}}</p>
        <button @click="ss">12232432</button>
    </div>
</template>
<script>
    export default {
        props: {
            price: {}
        },
        data() {
            return {
                count: 10
            }
        },
        mounted() {
            console.log(bus);
        },
        methods: {
            downPrice() {
                this.$emit("downPrice");
            },
            ss() {
                bus.$emit("aa", "12", this.count);
            }
        }
    }
</script>
<style>

</style>