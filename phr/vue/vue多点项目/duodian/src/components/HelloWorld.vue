<template>
  <div class="hello">
    123
    <div class="red"></div>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "@/static/scss/_mixin.scss";
    @import "@/static/scss/common.scss";
    .red {
        width: 100px;
        height: 200px;
        background: violet;
        /* @include box_flex; */
    }
</style>