<template>
    <div class="row_fulid">
       <el-row>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                   <widget_header3/>
                </div>
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple-light">
                   <widget_header33/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import widget_header3 from './widget_header3'
import widget_header33 from './widget_header33'
export default {
    name:"row_fulid3",
    data(){
        return{

        } 
    },
    components:{
        widget_header3,
        widget_header33
    }
}
</script>

<style scoped>
.row_fulid{
    width:100%;
    margin-bottom:25px;
}
</style>