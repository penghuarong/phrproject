<template>
        <ul class="shopcar_content">
            <li v-for="(car,index) in shopcarlist">
                <p><input type="checkbox" v-model="car.isCheck" @change="changeFile"></p>
                <img :src="car.img" alt="">
                <div class="shopcar_right">
                    <h3>{{car.name}}</h3>
                    <span>￥：{{car.price}}</span>
                    <div class="counter">
                        <span @click="reduce(index)">-</span>
                        <input type="text" :value="car.count">
                        <span @click="add(index)">+</span>
                    </div>
                </div>
                <i @click="del(index)">x</i>
            </li>
        </ul>
</template>
<script>
    export default {
        name: "app",
        props: ["shopcarlist"],
        methods: {
            changeFile() {
                this.$emit("update")
            },
            add(index) {
                this.shopcarlist[index].count++;
                this.$emit("update");
            },
            reduce(index) {
                if (this.shopcarlist[index].count <= 1) {
                    return
                }
                this.shopcarlist[index].count--;
                this.$emit("update");
            },
            del(index) {
                this.shopcarlist.splice(index, 1)
            }
        }
    }
</script>
<style>

</style>