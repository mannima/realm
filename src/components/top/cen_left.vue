<template>
    <ul class="pull_left">
        <li>
            <a href="#" class="message">
                <i class="el-icon-message"></i>
                Messages
            </a>
        </li>
        <li>
            <a href="#" class="notifications">
                <i class="el-icon-video-camera-solid"></i>
                 Notifications
            </a>
        </li>
    </ul>
</template>

<script>

export default {
    name:"cen_left",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.pull_left{
    float:left;
    list-style: none;
    margin:0;
    padding:0;
}
.pull_left li{
    float:left;
    line-height:20px;
}
.pull_left li a{
    color:#fff;
    display: block;
    font-size:16px;
    line-height:20px;
    padding:10px 15px;
    text-decoration:none;
    position: relative;
}
.icon-Group-{
    font-size:17px;
}
</style>


