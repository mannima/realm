<template>
    <div class="row_fulid">
       <el-row>
            <el-col :span="16">
                <div class="grid-content bg-purple">
                    <widget/>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple-light">
                   
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import widget from './widget'
export default {
    name:"row_fulid2",
    data(){
        return{

        } 
    },
    components:{
        widget
    }
}
</script>

<style scoped>
.row_fulid{
    width:100%;
    margin-bottom:25px;
}
.el-menu-item-group__title{
    display: none;
}
</style>