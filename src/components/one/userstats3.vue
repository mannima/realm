<template>
    <div class="userstats clearfix" style="margin:-top:25px">
        <a href="#">
            <white3/>
            <widget2/>
            <p>
                <strong>35/235</strong>
                Finished Tickets
            </p>
        </a>
    </div>
</template>


<script>
import white3 from './white3'
import widget2 from './widget2'
export default {
    name:"userstats3",
    data(){
        return{

        }
    },
    components:{
        white3,
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


