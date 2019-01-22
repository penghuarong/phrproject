<template>
        <div class="search-address">
          <div class="search-box">
            <i class="icon search"></i>
            <input type="text" v-model="searchKey" placeholder="小区、街道、大厦" />
          </div>
          <div class="address-wrap" v-show="addressArr.length >= 1">
            <ul>
              <li v-for="(item,index) in addressArr" :key="index" @click="select(item)">
                <h2>{{item.name}}</h2>
                <p>{{item.address}}</p>
              </li>
            </ul>
          </div>
        </div>
        </template>
<script>
    import map from '@/utils/map'

    export default {
        data() {
            return {
                searchKey: '',
                addressArr: []
            }
        },
        watch: {
            searchKey(newVal) {
                this.search(newVal)
            }
        },
        methods: {
            search(val) {
                if (val != '') {
                    map.search(val).then((res) => {
                        this.addressArr = res.poiList ? res.poiList.pois : []
                    })
                } else {
                    this.addressArr = []
                }
            },
            select(address) {
                this.$emit('select', address)
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '@/static/scss/_default.scss';
    .search-address {
        @include wh(100%, auto);
        .search-box {
            @include wh(auto, 80px);
            display: flex;
            padding: 20px;
            box-sizing: border-box;
            border: 1px solid $default-color;
            margin: 20px;
            input {
                flex: 1;
                border: 0;
                outline: none;
            }
        }
        .address-wrap {
            @include fullscreen(rgba(0, 0, 0, 0.2));
            position: fixed;
            top: 200px;
            z-index: 10;
            overflow: auto;
            overflow-x: hidden;
            ul {
                background: #f6f6f6;
                li {
                    padding: 20px;
                }
            }
        }
    }
</style>