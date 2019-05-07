<template>
    <div class="userstats clearfix" style="margin:-top:25px">
        <a href="#">
            <white5/>
            <widget2/>
            <p>
                <strong>152</strong>
                New Likes
            </p>
        </a>
    </div>
</template>


<script>
import white5 from './white5'
import widget2 from './widget2'
export default {
    name:"userstats5",
    data(){
        return{

        }
    },
    components:{
        white5,
        widget2
    }
}
</script>

<style scoped>
.userstats{
    position:relative;
    display:inline-block;
}
.userstats p{
    color:#888;
    font-size:14px;
    margin:0;
}
.userstats a{
    display: block;
    text-align:center;
}
 strong{
     font-weight:bold;
 }
.userstats p strong{
    display: block;
    font-size:16px;
}
</style>


