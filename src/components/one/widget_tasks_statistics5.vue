<template>
    <div class="widget_tasks_statistics">
        <userstats5/>
    </div>
</template>

<script>
import userstats5 from './userstats5'
export default {
    name:"widget_tasks_statistics5",
    data(){
        return{

        }
    },
    components:{
        userstats5
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

