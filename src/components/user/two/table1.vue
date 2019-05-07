<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="Username" width="180"></el-table-column>
        <el-table-column prop="date" label="Department" width="180"></el-table-column>
        <el-table-column prop="address" label="Status"> </el-table-column>
        <el-table-column prop="button">
             <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                
            </template>
        </el-table-column>
        
    </el-table>
</template>

<script>
    export default {
        name:"table",
        data() {
            return {
                tableData: [{
                    date: 'Development',
                    name: '王小虎',
                    address: 'Working',
                }, {
                    date: 'Development',
                    name: '王小虎',
                    address: 'Working'
                }, {
                    date: 'Development',
                    name: '王小虎',
                    address: 'Working'
                }, {
                    date: 'Development',
                    name: '王小虎',
                    address: 'Working'
                }, {
                    date: 'Development',
                    name: '王小虎',
                    address: 'Working'
                }, {
                    date: 'Development',
                    name: '王小虎',
                    address: 'Working'
                }]
            }
        }
    }
</script>



<style>
    .el-table th{
        padding:8px!important;
        line-height: 20px;
     text-align: left;
    }
    .el-table th div{
        padding:0!important;
        color:#333!important;
    }
    .el-table td{
        padding: 8px;
        /* padding-bottom:0; */
        line-height: 20px;
        text-align: left;
        vertical-align: top;
    }
    .el-table .cell{
        padding:0;
    }
    .el-table__row .el-table_1_column_3 .cell{
        background:#468847;
        width:58.5px;
        height:18px;
        border-radius:3px;
        color:#fff;
        text-align:center;
        font-size:11.8px;
    }
</style>

