<template>
    <div class="logindetail_wrap">
        <div class="login_head">
            用户信息
        </div>
        <div class="login_content">
            <h1>用户名：{{certificate.username}}</h1>
        </div>
        <div class="photo">
            <img :src="certificate.photo" alt="">
        </div>
        <div>
            <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </div>
    </div>
</template>
<script>
    import {
        upload
    } from "element-ui";
    export default {
        name: "app",
        data() {
            return {
                certificate: {},
                imageUrl: ''
            }
        },
        mounted() {
            this.getCertificate();
        },
        components: {
            upload
        },
        methods: {
            getCertificate() {
                this.certificate = this.$cookies.get("certificate");
                console.log(this.certificate);
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }

    }
</script>
<style>
    @import "../../node_modules/element-ui/lib/theme-chalk/index.css";
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }
    
    .login_head {
        height: 50px;
        width: 100%;
        background: dodgerblue;
        color: #fff;
        text-align: center;
        line-height: 50px;
    }
    
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>