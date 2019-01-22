<template>
    <div class="product">
        <ul class="product_list">
            <li v-for="(v,i) in list" :key="i" :style="{width:100/colnum + '%'}" :class="{row:colnum == 1}" @click.stop="godetail(i,v)">
                <div class="img">
                    <img :src="v.imageUrl" alt="">
                </div>
                <div class="name">
                    <p>{{v.data.name}}</p>
                    <p><span class="price"><sup>￥</sup>{{v.data.price}}</span><span class="addcar" @click.stop="addnum(i,v.spId)">+</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import axios from "axios";
    export default {
        props: {
            list: {
                type: Array
            },
            colnum: {
                type: Number,
                default: 1
            }
        },
        methods: {
            godetail(index, v) {
                this.$router.push({
                    path: "/detail",
                    query: {
                        con: v
                    }
                })
            },
            addnum(i, spId) {
                this.$emit("click", i, spId)
            }
        }
    }
</script>
<style>
    .product_list {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    
    .product_list li {
        font-size: 14px;
        padding: 10px;
        box-sizing: border-box;
        display: flex;
        /* align-items: center; */
        flex-direction: column;
    }
    
    .product_list li .img {
        flex-shrink: 0;
        width: 80px;
        margin-right: 10px;
    }
    
    .product_list li .name {
        flex: 1;
        margin-left: 10px;
    }
    
    .product_list li .img img {
        width: 100%;
    }
    
    .name p:nth-child(1) {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-break: break-all;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color: rgba(0, 0, 0, .7)
    }
    
    .name p:nth-child(2) {
        margin-top: 5px!important;
        display: flex;
        justify-content: space-between;
    }
    
    .name p:nth-child(2) .price {
        font-size: 16px;
        font-weight: normal;
    }
    
    .name p:nth-child(2) .addcar {
        width: 25px;
        height: 25px;
        background: #ff8143;
        line-height: 25px;
        text-align: center;
        font-size: 18px;
        color: #fff;
        font-weight: bold;
    }
    
    .product_list li.row {
        flex-direction: row;
    }
    
    .row .img {
        width: 100px;
    }
</style>