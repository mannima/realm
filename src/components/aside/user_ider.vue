<template>
    <div class="user_ider clear_fix">
        <img src="../../../static/img/odinn.jpg" alt="">
        <h5>Odinn</h5>
        <a href="#">
            <i class="el-icon-s-tools"></i>
            Settings
        </a>
    </div>
</template>

 
<script>
export default {
    name:"user_ider",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.el-icon-s-tools{
   font-size:10px;
   color:#fff;
} 
.user_ider{
    padding:15px 15px;
    margin:0;
    background-color:#3d3e43;
    overflow:hidden;
}
.user_ider a{
    font-size:11px;
    color:#fff;
}
.clear_fix:before{
    display:table;
    content:"";
    line-height:0;
}
.user_ider img{
    float:left;
    width:50px;
    height:50px;
    border-radius:150px;
    margin:0 15px 0 0;
}
.user_ider h5{
    color:#e28271;
    line-height:16px;
    margin:6px 0 0;
}
</style>


