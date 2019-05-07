<template>
    <div>
        <canvas id="main4" style="width:100px;;height:30px;"></canvas>
        <h5>Pages / Visit:</h5>
        <h4>5.8</h4>
    </div>
</template>

<script>
var echarts = require('echarts');
export default {
    name:"canvas4",
    data(){
        return{

        }
    },
    mounted(){
        var myChart = echarts.init(document.getElementById('main4'));
        myChart.setOption({
            xAxis: {
                type: 'category',
                boundaryGap: false,
                // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [1, 10, 15, 5, 25, 30, 15,20],
                type: 'line',
                areaStyle: {}
            }]
        });
    }
}
</script>

<style>

</style>


