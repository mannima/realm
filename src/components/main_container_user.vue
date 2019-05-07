<template>
    <div class="main_container">
        <row_fulid/>
        <row_fulid2/>
    </div>
</template>

<script>
import row_fulid from './user/one/row_fulid'
import row_fulid2 from './user/two/row_fulid2'
export default {
    name:"main_container_user",
    data(){
        return{

        }
    },
    components:{
        row_fulid,
        row_fulid2
    }
}
</script>


<style scoped>
.main_container{
    padding:0 25px 25px;
    position:relative;
    height:587px;
    overflow-y:auto;
}
.el-menu-item-group__title{
    padding:0!important;
}
</style>


