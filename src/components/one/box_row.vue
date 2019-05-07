<template>
    <div class="box_row clearfix" style="display:inline-block">
        <widget_tasks_statistics/>
        <widget_tasks_statistics2/>
        <widget_tasks_statistics3/>
        <widget_tasks_statistics4/>
        <widget_tasks_statistics5/>
        <widget_tasks_statistics6/>
    </div>
</template>

<script>
import widget_tasks_statistics from './widget_tasks_statistics'
import widget_tasks_statistics2 from './widget_tasks_statistics2'
import widget_tasks_statistics3 from './widget_tasks_statistics3'
import widget_tasks_statistics4 from './widget_tasks_statistics4'
import widget_tasks_statistics5 from './widget_tasks_statistics5'
import widget_tasks_statistics6 from './widget_tasks_statistics6'
export default {
    name:"box_row",
    data(){
        return{

        }
    },
    components:{
        widget_tasks_statistics,
        widget_tasks_statistics2,
        widget_tasks_statistics3,
        widget_tasks_statistics4,
        widget_tasks_statistics5,
        widget_tasks_statistics6
    }
}
</script>

<style scoped>
.clearfix:before,.clearfix:after,{
    display:table;
    content:"";
    line-height:0;
}
</style>

