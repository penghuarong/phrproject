<template>
    <div class="wrap">
        <p>请输入单价：<input type="text" v-model="price"></p>
        <sametwo :price="price" @downPrice="downPrice"></sametwo>
        <samethree></samethree>
    </div>
</template>
<script>
    import sametwo from "./same2.vue";
    import samethree from "./same3.vue";
    export default {
        data() {
            return {
                price: ""
            }
        },
        mounted() {

        },
        methods: {
            downPrice() {
                this.price = (this.price - 1).toString();
            }
        },
        components: {
            sametwo,
            samethree
        }
    }
</script>
<style>

</style>