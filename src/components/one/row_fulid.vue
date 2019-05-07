<template>
    <div class="row_fulid">
        <overview_boxes/>
    </div>
</template>

<script>
import overview_boxes from './overview_boxes'
export default {
    name:"row_fulid",
    data(){
        return{

        } 
    },
    components:{
        overview_boxes
    }
}
</script>

<style scoped>
.row_fulid{
    width:100%;
    margin-bottom:25px;
}
</style>


