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
                        <span class="spans">Weekly Statistics</span>
                    </template>
                    <el-menu-item-group>
                         <canvas id="main" style="width:100px;;height:30px;"></canvas>
                         <h5>Visits:</h5>
                         <h4>502</h4>
                    </el-menu-item-group>
                      
                    <el-menu-item-group>
                         <canvas2/>
                    </el-menu-item-group>
                    <el-menu-item-group>
                         <canvas3/>
                    </el-menu-item-group>
                    <el-menu-item-group>
                        <canvas4/>
                    </el-menu-item-group>
                    <el-menu-item-group>
                         <canvas4/>
                    </el-menu-item-group>
                    <el-menu-item-group>
                         <canvas4/>
                    </el-menu-item-group>
                    <el-menu-item-group>
                         <canvas4/>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>


        
</template>

<script>
import canvas2 from './canvas2'
import canvas3 from './canvas3'
import canvas4 from './canvas4'
var echarts = require('echarts');


export default {
    name:"widget_header",
    data(){
        return{

        }
    },
    mounted(){
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [1, 20, 7, 10, 25, 30, 22,10],
                type: 'line',
                areaStyle: {}
            }]
        });
    },
    components:{
        canvas2,
        canvas3,
        canvas4
    }
}
</script>

<style>
.spans{
    color:#fff;
}
h5{
    font-size: 12px;
    margin: 0;
    display: inline;
    vertical-align: top;
}
h4{
    margin: 0 10px 0 0;
    float: right;
    display: inline;
    color: #E28271;
    font-size: 17.5px;
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
    padding:3px 5px;
    box-sizing:border-box;
}

</style>


