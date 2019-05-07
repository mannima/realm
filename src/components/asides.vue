<template>

    <div class="sidebar_nav nav_collapse collapse">
        <user_ider/>
        <accordion/>
    </div>

</template>


<script> 
import user_ider from './aside/user_ider'
import accordion from './aside/accordion'
export default {
    name:"asides", 
    data(){
        return{

        }
    },
    components:{
        user_ider,
        accordion
    }
}
</script>


<style scoped>
    .collapse{
        height:auto;
        overflow:visible;
        position:fixed;
        height:0;
        left:0;
        overflow:hidden;
        transition:height .35s ease;
    }
    .sidebar_nav{
        float:left;
    }
</style>

