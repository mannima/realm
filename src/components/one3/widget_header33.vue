<template>
    <div class="widget_header2">
        <el-row class="tac">
            <el-col :span="24">   
                <el-menu default-active="2" class="el-menu-vertical-demo">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span class="spans">Employee Task Status</span>
                        </template>
                        <el-menu-item-group>
                            <div class="widget-body clearfix" style="height: 170px; overflow: hidden; width: auto;">
                                <div class="widget-tasks-statistics">
                                    <div class="userstats clearfix" style="margin-top:25px;">
                                        <a href="#">
                                            <img src="../../../static/img/07.jpg" class="image">
                                            <div class="widget">
                                                <div class="widget2">
                                                    <canvas width="75" height="75"></canvas>
                                                </div>
                                            </div>
                                            <p>Fernando</p>
                                        </a>
                                    </div>
                                    <div class="userstats clearfix" style="margin-top:25px;">
                                        <a href="#">
                                            <img src="../../../static/img/07.jpg" class="image">
                                            <div class="widget">
                                                <div class="widget2">
                                                    <canvas width="75" height="75"></canvas>
                                                </div>
                                            </div>
                                            <p>Fernando</p>
                                        </a>
                                    </div>
                                    <div class="userstats clearfix" style="margin-top:25px;">
                                        <a href="#">
                                            <img src="../../../static/img/07.jpg" class="image">
                                            <div class="widget">
                                                <div class="widget2">
                                                    <canvas width="75" height="75"></canvas>
                                                </div>
                                            </div>
                                            <p>Fernando</p>
                                        </a>
                                    </div>
                                    <div class="userstats clearfix" style="margin-top:25px;">
                                        <a href="#">
                                            <img src="../../../static/img/07.jpg" class="image">
                                            <div class="widget">
                                                <div class="widget2">
                                                    <canvas width="75" height="75"></canvas>
                                                </div>
                                            </div>
                                            <p>Fernando</p>
                                        </a>
                                    </div>
                                    <div class="userstats clearfix" style="margin-top:25px;">
                                        <a href="#">
                                            <img src="../../../static/img/07.jpg" class="image">
                                            <div class="widget">
                                                <div class="widget2">
                                                    <canvas width="75" height="75"></canvas>
                                                </div>
                                            </div>
                                            <p>Fernando</p>
                                        </a>
                                    </div>
                                    <div class="userstats clearfix" style="margin-top:25px;">
                                        <a href="#">
                                            <img src="../../../static/img/07.jpg" class="image">
                                            <div class="widget">
                                                <div class="widget2">
                                                    <canvas width="75" height="75"></canvas>
                                                </div>
                                            </div>
                                            <p>Fernando</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name:"widget_header33",
    data(){
        return{

        }
    }
}
</script>

<style scoped>

.widget_header2{
    margin-left:3.5%;
}
.widget_buttons{
        float: right;
    padding: 15px 15px 0 0;
}
.collapse{
    position: relative;
    height: 0;
    overflow: hidden;
    -webkit-transition: height 0.35s ease;
    -moz-transition: height 0.35s ease;
    -o-transition: height 0.35s ease;
    transition: height 0.35s ease;
}
.el-menu{
    background-color:#efefef;
}
.el-menu-item-group__title{
    display: none;
}
.el-menu-item-group>ul{
    background:#fff;
    /* padding:10px 5px; */
    box-sizing:border-box;
}
.el-button{
    margin-left:379px;
    padding:2px 10px;
    margin-top:-5px;
    background-color: #42C1F7;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    font-size: 11.9px;
    line-height: 20px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
}
.widget-body{
    padding: 15px;
    box-sizing:border-box;
}
.widget-tasks-statistics{
    text-align:center;
}
.userstats{
    position: relative;
    display: inline-block;
    margin: 0 30px 10px;
}
a{
    color: #26AEF2;
    text-decoration: none;
}
.image{
    border-radius: 60px 60px 60px 60px;
    left: 15px;
    position: absolute;
    top: 15px;
    width: 45px;
    opacity: 1;
    padding: 0;
}
p{
    margin: 0 0 10px;
}
.widget{
        border-radius: 3px 3px 3px 3px;
    overflow: hidden;
}
.widget2{
    display:inline;
    width:75px;
    height:75px;
}
.spans{
    color:#fff;
}
</style>


