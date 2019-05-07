<template>
    <div class="nav_bar nav_fixed_top">
        <div class="navbar_inner">
            <logo/>
            <div class="visible_desktop">
                <cen/>
            </div>
        </div>
    </div>
</template>


<script>
import logo from './top/logo'
import cen from './top/cen'
export default {
    name:"top",
    data(){
        return{

        }
    },
    components:{
        logo,
        cen
    }
}
</script>

<style scoped>

</style>


