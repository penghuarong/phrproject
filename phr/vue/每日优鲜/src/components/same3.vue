<template>
    <div>
        第三个页面
    </div>
</template>
<script>
    export default {
        props: {
            price: {}
        },
        data() {
            return {

            }
        },
        mounted() {
            bus.$on('aa', (o, x) => {
                console.log(o, x);
            })
        },
        methods: {

        }


    }
</script>
<style>

</style>