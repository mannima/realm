<template>
    <div class="row_fulid">
       <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <widget_header/>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple-light">
                   <widget_header2/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>




import widget_header from './widget_header'
import widget_header2 from './widget_header2'
export default {
    name:"row_fulid2",
    data(){
        return{

        } 
    },
    components:{
        widget_header,
        widget_header2
    }
}
</script>

<style scoped>
.row_fulid{
    width:100%;
    margin-bottom:25px;
}
</style>