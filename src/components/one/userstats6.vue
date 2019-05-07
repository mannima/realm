<template>
    <div class="userstats clearfix" style="margin:-top:25px">
        <a href="#">
            <white6/>
            <widget2/>
            <p>
                <strong>592</strong>
                Leads Generated
            </p>
        </a>
    </div>
</template>


<script>
import white6 from './white6'
import widget2 from './widget2'
export default {
    name:"userstats6",
    data(){
        return{

        }
    },
    components:{
        white6,
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


