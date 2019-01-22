<template>
    <div>
        <div class="hyz_header">
            <p>
                <span>北京</span>
                <i class="iconfont icon-xiangxia"></i>
            </p>
            <div class="from">
                <i class="iconfont icon-fangdajing"></i>
                <input type="text" placeholder="输入上架">
            </div>
            <p>
                <i class="iconfont icon-icongerenzhongxin-01"></i>
                <i>我的</i>
            </p>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss" scoped>
    .hyz_header {
        display: flex;
        align-items: center;
        height: 50px;
        padding: 0 10px;
        background: green;
    }
    
    .hyz_header p {
        width: 50px;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
    }
    
    .hyz_header p:nth-child(3) {
        display: flex;
        flex-direction: column;
        font-size: 10px;
    }
    
    .hyz_header p:nth-child(3) i {
        font-style: normal;
    }
    
    .hyz_header .from {
        height: 35px;
        flex: 1;
        display: flex;
        align-items: center;
        margin: 0 10px;
        background: cadetblue;
    }
    
    .hyz_header .from i.iconfont {
        padding: 0 10px;
        color: #fff;
    }
    
    .hyz_header .from input {
        border: 0;
        outline: none;
        height: 35px;
        background: cadetblue;
    }
    
    .hyz_header .from input::-webkit-input-placeholder {
        color: rgba(255, 255, 255, .5);
    }
</style>