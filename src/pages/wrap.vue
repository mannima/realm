<template>
    <el-container>
        <el-header>

            <top/>

        </el-header>
        <el-container>
            <el-aside width="200px">

                <asides/>

            </el-aside>
            <el-main>

                <main_container_user/>

            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import top from '../components/top'
import asides from '../components/asides'
import main_container_user from '../components/main_container_user'
export default {
    name:"wrap",
    data(){
        return{

        }
    },
    components:{
        top,
        asides,
        main_container_user
    }
}
</script>

<style scoped>
.el-header{
    background:pink;
    height:45px!important;
    padding:0;
    background:black;
}
.el-aside{
    background:#292a2f;
    height:auto!important;
}
.el-main{
    padding:0;
    
}
a{
    text-decoration:none;
}
*{
    box-sizing: border-box;
}
</style>


