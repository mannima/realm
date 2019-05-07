<template>
        <!-- <i class="iconfont icon-tubiao"></i>
        <h5>Weekly Statistics</h5>
        <div class="widget_buttons">
           <a href="#" class="collapse widget-hidden">
               <i class="el-icon-arrow-down"></i>
           </a> 
        </div>  --> 
    <el-row class="tac">
        <el-col :span="24">   
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span class="spans">Quick Buttons</span>
                    </template>
                    <el-menu-item-group >
                        <div class="menu3">
                            <el-badge value="7k" class="item">
                                <el-button size="small">评论</el-button>
                            </el-badge>
                            <el-badge value="7k" class="item">
                                <el-button size="small">评论</el-button>
                            </el-badge>
                            <el-badge value="7k" class="item">
                                <el-button size="small">评论</el-button>
                            </el-badge>
                            <el-badge value="7k" class="item">
                                <el-button size="small">评论</el-button>
                            </el-badge>
                            <el-badge value="7k" class="item">
                                <el-button size="small">评论</el-button>
                            </el-badge>
                            <el-badge value="7k" class="item">
                                <el-button size="small">评论</el-button>
                            </el-badge>
                        </div>
                        
                    </el-menu-item-group>
                      

                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>


        
</template>

<script>
export default {
    name:"widget_header3",
    data(){
        return{

        }
    }
   
}
</script>

<style scoped>

span{
    font-size: 12px;
    margin: 0;
    display: inline;
    vertical-align: top;
    color: #fff;
    font-weight: 200;
}
.el-menu{
    background-color:#efefef;
}
.el-menu-item-group__title{
    display: none;
}
.el-menu-item-group>ul{
    background:#fff;
    box-sizing:border-box;
    min-height:170px;
    border-style: solid;
    border-width: 0 1px 1px;
    border-color: #ccc;
}
.menu3{
    padding:12px 10px;
    height:170px;
    box-sizing:border-box;
}
.el-button--small{
    padding:10px 0;
    width: 99.78px;
   height:62px;
}
.el-badge:nth-child(1){
    margin-bottom:10px;
}
.el-badge:nth-child(2){
    margin-left: 3%;
     margin-bottom:10px;
}
.el-badge:nth-child(3){
    margin-left: 3%;
     margin-bottom:10px;
}
.el-badge:nth-child(5){
    margin-left: 3%;
}
.el-badge:nth-child(6){
    margin-left: 3%;
}
</style>


