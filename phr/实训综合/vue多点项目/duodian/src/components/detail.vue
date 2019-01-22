<template>
    <div class="detail">
        <Comhead title="列表详情"/>
        <div class="detail_con">
            <div class="detail_con_img">
                <img :src="detailData.imageUrl" alt="">
            </div>
            <div class="detail_con_name">
                <p class="product_name">{{detailData.data.name}}</p>
                <p class="product_price"><span><sup>￥</sup>{{detailData.data.promotionPrice}}</span><i>{{detailData.data.price}}</i></p>
            </div>
        </div>
    </div>
</template>
<script>
    import Comhead from "./comhead.vue"
    export default {
        data() {
            return {
                detailData: []
            }
        },
        components: {
            Comhead
        },
        created() {
            this.detailData = this.$route.query.con
        }
    }
</script>
<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
    }
    
    .detail {
        width: 100%;
        height: 100%;
        overflow: hidden;
        .detail_con {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .detail_con_img {
                width: 100%;
                img {
                    width: 100%;
                }
            }
            .detail_con_name {
                font-size: 14px;
                .product_name {
                    font-size: 30px;
                    color: rgba(0, 0, 0, 0.7);
                    padding: 0 10px;
                }
                .product_price {
                    padding: 0 10px;
                    span {
                        font-size: 20px;
                        color: #ff712b;
                        margin-right: 10px;
                    }
                    i {
                        font-size: 14px;
                        color: rgba(0, 0, 0, .5);
                        text-decoration: line-through;
                    }
                }
            }
        }
    }
</style>