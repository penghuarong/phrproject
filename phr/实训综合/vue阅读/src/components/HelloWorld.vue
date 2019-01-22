<template>
  <div class="wrapper">
    <Head></Head>
    <Body></Body>
    <Foot></Foot>
    <Set></Set>
    <Slide></Slide>
  </div>
</template>

<script>
    import Head from "./head.vue";
    import Foot from "./foot.vue";
    import Body from "./body.vue";
    import Set from "./set.vue";
    import Slide from "./slide.vue";
    export default {
        name: 'HelloWorld',
        data() {
            return {

            }
        },
        components: {
            Head,
            Foot,
            Body,
            Set,
            Slide
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    
    .header {
        width: 100%;
        height: 50px;
        flex-shrink: 0;
    }
    
    .body {
        flex: 1;
    }
    
    .footer {
        width: 100%;
        height: 50px;
        flex-shrink: 0;
    }
</style>