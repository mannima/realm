<template>
    <div class="overview_boxes">
        <box_row/>
    </div> 
</template>

<script>
import box_row from './box_row'
export default {
    name:"overview_boxes",
    data(){
        return{

        }
    },
    components:{
        box_row
    }
}
</script>


<style scoped>
.overview_boxes{
    text-align:center;
    margin-top:15px;
    min-height:208px;
}
</style>

