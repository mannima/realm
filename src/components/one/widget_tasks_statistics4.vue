<template>
    <div class="widget_tasks_statistics">
        <userstats4/>
    </div>
</template>

<script>
import userstats4 from './userstats4'
export default {
    name:"widget_tasks_statistics4",
    data(){
        return{

        }
    },
    components:{
        userstats4
    }
}
</script>

<style scoped>
.widget_tasks_statistics{
    float:left;
    margin:0 30px 15px 0;
    text-align:center;
}
</style>

