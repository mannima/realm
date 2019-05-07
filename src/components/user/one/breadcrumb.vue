<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item><a href="/">Home</a></el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">Pages</a></el-breadcrumb-item>
            <el-breadcrumb-item>Users</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name:"breadcrumb",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
.breadcrumb{
    background: none repeat scroll 0 0 transparent;
    margin: 0;
    padding: 8px 0;
}
.el-breadcrumb__inner a{
    color: #26AEF2;
    text-decoration: none;
    font-weight: 200;
}
.el-breadcrumb__inner{
    color:#999!important;
}
.el-breadcrumb__item{
    line-height:30px;
}
</style>


