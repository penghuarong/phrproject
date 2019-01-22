<template>
   <div>
      <div>
          <img :src="`//y.gtimg.cn/music/photo_new/T002R300x300M000${this.$route.params.id}.jpg?max_age=2592000`" alt="" width="100%">
          <p>作者：{{detail.singername}}</p>
          <p>语种：{{detail.lan}}</p>
          <p>公司：{{detail.company}}</p>
      </div>
   </div>
</template>
<script>
    import {
        getdetail
    } from "../../api/rank.js";
    export default {
        name: "app",
        data() {
            return {
                detail: []
            }
        },
        mounted() {
            this.getsonglistdetail();
        },
        methods: {
            getsonglistdetail() {
                getdetail(this.$route.params.id).then((res) => {
                    this.detail = res.data;
                    console.log(this.detail);
                })
            }
        }
    }
</script>
<style></style>