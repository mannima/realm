<template>
    <el-menu  default-active="2" class="el-menu-vertical-demo">
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span class="spans">Employees</span>
                <i class="el-icon-plus"></i>
            </template>
            <el-menu-item-group >
                <div class="widget-body">
                    <table1/>
                </div>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
import table1 from './table1'
export default {
    name:"widget",
    data(){
        return{

        }
    },
    components:{
        table1
    }
   
}
</script>

<style scoped>
.spans{
    color:#fff;
}
.el-icon-plus{
    margin-left:544px;
}
.widget-body{
    height: 290px; 
    overflow: hidden; 
    display: block;
    padding: 15px;
    border-style: solid;
    border-width: 0 1px 1px;
    border-color: #ccc;
    background-color: #fff;
}
.el-menu-item-group__title{
    display: none;
}

</style>


