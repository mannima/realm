<template>
    <div class="accordion_heading">
        <el-row class="tac">
            <el-col :span="24">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Dashboard</span>
                    </el-menu-item>

                    
                    <el-submenu index="2">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Features</span>
                        </template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        </el-submenu>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Components</span>
                        </template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                        <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-submenu>


                    <el-menu-item index="4">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Tasks</span>
                    </el-menu-item>


                    <el-menu-item index="5">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Analytics</span>
                    </el-menu-item>
                    

                    <el-menu-item index="6">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Suooprt Tickets</span>
                    </el-menu-item>


                    <el-menu-item index="7">
                        <i class="el-icon-menu"></i>
                        <span slot="title">Users</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>


<script>
export default {
    name:"accordion",
    data(){
        return{

        }
    },
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>


<style>

.accordion_heading,el-row,el-col{
    background:#292a2f;
    height:100%!important;
}
.el-menu-item,.el-submenu__title{
    background:#292a2f!important;
}


</style>


