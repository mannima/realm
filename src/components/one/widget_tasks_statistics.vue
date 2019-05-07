<template>
    <div class="widget_tasks_statistics">
        <userstats/>
    </div>
</template>

<script>
import userstats from './userstats'
export default {
    name:"widget_tasks_statistics",
    data(){
        return{

        }
    },
    components:{
        userstats
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

