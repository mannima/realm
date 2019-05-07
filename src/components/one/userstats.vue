<template>
    <div class="userstats clearfix" style="margin:-top:25px">
        <a href="#">
            <white/>
            <widget/>
            <p>
                <strong>+530</strong>
                Visits this month
            </p>
        </a>
    </div>
</template>


<script>
import white from './white'
import widget from './widget'
export default {
    name:"userstats",
    data(){
        return{

        }
    },
    components:{
        white,
        widget
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


