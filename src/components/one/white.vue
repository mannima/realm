<template>
    <div class="white">
        <i style="color:#e28271;font-size:40px;" class="iconfont icon-yanjing"></i>
        <p style="color:#e28271">+85%</p>
    </div>
</template>

<script>
export default {
    name:"white",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.white{
   background: none repeat scroll 0 0 white;
    border-radius: 60px 60px 60px 60px;
    font-size: 40px;
    left: 15px;
    opacity: 1;
    padding: 15px;
    position: absolute;
    top: 15px;
    z-index: -1;
    width: 90px;
    height: 90px;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
}
.white p{
    font-size:14px;
    margin:0;
}
.icon-yanjing{
    width:auto;
    height:auto;
}
</style>

