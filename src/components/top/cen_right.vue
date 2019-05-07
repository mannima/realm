<template>
    <ul class="pull_right"> 
        <li>
            <a href="#">
                <i class="iconfont icon-off"></i>
                 Logout
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name:"cen_right",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.pull_right{
    float:right;
    list-style: none;
    margin:0;
}
.pull_right li{
    float:left;
    line-height:20px;
}
.pull_right li a{
    color:#fff;
    display: block;
    font-size:16px;
    line-height:20px;
    padding:10px 15px;
    text-decoration:none;
    position: relative;
}
</style>


