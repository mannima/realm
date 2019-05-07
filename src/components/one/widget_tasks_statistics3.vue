<template>
    <div class="widget_tasks_statistics">
        <userstats3/>
    </div>
</template>

<script>
import userstats3 from './userstats3'
export default {
    name:"widget_tasks_statistics3",
    data(){
        return{

        }
    },
    components:{
        userstats3
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

