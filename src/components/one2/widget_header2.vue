<template>
    <div class="widget_header2">
        <el-row class="tac">
            <el-col :span="24">   
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span class="spans">Last 3 month's income</span>
                            <el-button type="primary">+ See more</el-button>
                        </template>
                        <el-menu-item-group>
                            <div id="ok">
                                
                            </div>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
var echarts = require('echarts');
export default {
    name:"widget_header2",
    data(){
        return{

        }
    },
    mounted(){
        var myChart = echarts.init(document.getElementById('ok'));
        myChart.setOption({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2012-01-11', '2012-01-27', '2012-02-12', '2012-02-28', '2012-03-15', '2012-03-31']
            },
            yAxis: {
                type: 'value',
                data: [102, 172, 130, 198, 256, 211, 345,456,384,584],

            },
            series: [{
                data: [102, 172, 130, 198, 256, 211, 345,456,384,584],
                type: 'line',
                symbolSize : 8,
                lineStyle:{
                    color:'#00FF00'
                },
                itemStyle: {
					normal: {
                            lineStyle: {
                                width:2, //调整 线条的宽度  5已经很宽啦
                                color : 'skyblue', //线条颜色,
                               
                            }
						}
					},
            }]
        });
    },
}
</script>

<style scoped>
.spans{
    color:#fff;
}
#ok{
    width:721px;
    height:274px;
}
canvas{
    width:721px;
    height:274px;
}
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
    padding:10px 5px;
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
</style>


