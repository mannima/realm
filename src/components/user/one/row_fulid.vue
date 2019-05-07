<template>
    <div class="row_fulid">
        <breadcrumb/>
        <h2 class="heading">
            Users
            <div class="btn-group pull-right">
                <button class="btn">
                    <i class="el-icon-download"></i>
                    Export
                </button>
                <button class="btn">
                    <i class="el-icon-message"></i>
                    Email
                </button>
                <button class="btn">
                    <i class="el-icon-s-tools"></i>
                    Settings
                </button>
            </div>
        </h2>
    </div>
</template>

<script>
import breadcrumb from './breadcrumb'
export default {
    name:"row_fulid",
    data(){
        return{

        } 
    },
    components:{
        breadcrumb
    }
}
</script>

<style scoped>
.row_fulid{
    width:100%;
    margin-bottom:25px;
}
.heading{
    border-bottom: 1px solid #EBEBEB;
    margin: 0;
    padding: 0 0 15px;
    font-weight: normal;
}
h2{
    font-size: 31.5px;
    line-height: 40px;
    text-shadow: 1px 1px 1px #FFFFFF;
}
.pull-right{
    float:right;
}
.btn{
    display: inline-block;  
    padding: 4px 12px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    color: #333333;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
    background-color: #f5f5f5;
    font-size: 14px;
    position: relative;
    background-image: none !important;
    border-color: rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.25);
    border: 1px solid #bbbbbb;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.2), 0 1px 2px rgba(0,0,0,.05);
    float: left;
}
.btn:nth-child(1){
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
}
.btn:nth-child(2){
    border-left:none;
    border-right:none;
}
.btn:nth-child(3){
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
}
</style>


