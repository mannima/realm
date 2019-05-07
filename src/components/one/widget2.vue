<template>
    <div class="widget">
        <div style="display:inline;width:120px;height:120px">
            <canvas width="120" height="120px"></canvas>
            <input data-width="120" data-height="120" data-displayinput="false" data-readonly="true" data-thickness=".15" value="85" readonly="readonly" style="display: none; width: 0px; visibility: hidden;">
        </div>
    </div>
</template>

<script>
export default {
    name:"widget2",
    data(){
        return{

        }
    }
}
</script>

<style>
.widget{
    border-radius:3px 3px 3px 3px;
    overflow:hidden;
}
canvas{
    display:inline-block;
}
</style>


