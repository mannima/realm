<template>
    <div class="widget_tasks_statistics">
        <userstats2/>
    </div>
</template>

<script>
import userstats2 from './userstats2'
export default {
    name:"widget_tasks_statistics2",
    data(){
        return{

        }
    },
    components:{
        userstats2
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

