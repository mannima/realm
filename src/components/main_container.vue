<template>
     <div class="main_container">
        <row_fulid/>
        <row_fulid2/>
        <row_fulid3/>
    </div>
</template>

 
<script>
import row_fulid from './one/row_fulid'
import row_fulid2 from './one2/row_fulid2'
import row_fulid3 from './one3/row_fulid3'
export default {
    name:"main_container",
    data(){
        return{

        }
    },
    components:{
        row_fulid,
        row_fulid2,
        row_fulid3
    }
}
</script>

<style>
.main_container{
    padding:0 25px 25px;
    position:relative;
    height:587px;
    overflow-y:auto;
}

</style>

