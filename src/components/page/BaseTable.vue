<template>
<div>
    <div class="crumbs">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>
                <i class="el-icon-s-grid"></i>基础表单
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="container">
        <div class="handle-box">
            <el-button
                type="primary"
                icon="el-icon-delete"
                class="mr10"
                size="small"            
            >批量删除</el-button>
            <el-select size="small" v-model="query.address" placeholder="地址" class="handle-select mr10">
                <el-option key="1" label="江苏省" value="江苏省"></el-option>
                <el-option key="2" label="上海市" value="上海市"></el-option>
            </el-select>
            <el-input size="small" v-model="query.name" class="handle-input mr10" placeholder="用户名"></el-input>
            <el-button size="small" type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
        </div>
        <el-table 
            :data="tableData"
            border
            class="table"
            ref="multipleTable"
            header-cell-class-name="table-header"
            @select-change="handleSelectionChange"
        >
            <el-table-column type="selection" width="55" align="center">

            </el-table-column>
            <el-table-column prop="id" label="ID" width="55" align="center">

            </el-table-column>
            <el-table-column prop="name" label="用户名">

            </el-table-column>
            <el-table-column label="账户余额">
                <template slot-scope="scope">￥{{scope.row.money}}</template>
            </el-table-column>
            <el-table-column label="头像（查看头像）" align="center">
                <template slot-scope="scope">
                    <el-image
                    class="table-td-thumb"
                    :src="scope.row.thumb"
                    :preview-src-list="[scope.row.thumb]"
                    >

                </el-image>
                </template>
                
            </el-table-column>
            <el-table-column prop="address" label="地址">
                
            </el-table-column>
            <el-table-column label="状态" align="center">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.state ==='成功'?'success':'danger'" >
                        {{scope.row.state}}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="date" label="注册时间">

            </el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                    <el-button
                        type="text"
                        icon="el-icon-edit"
                        @click="handleEdit(scope.$index,scope.row)"
                    >编辑</el-button>
                    <el-button
                        type="text"
                        icon="el-icon-delete"
                        class="red"
                    >删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                background
                layout="total, prev, pager, next"
                :current-page="query.pageIndex"
                :page-size="query.pageSize"
                :total="pageTotal"
                @current-change="handlePageChange"
            ></el-pagination>
        </div>
    </div>
    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
        <el-form>
            <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="地址">
                <el-input v-model="form.address"></el-input>
            </el-form-item>
            
        </el-form>
        <span slot="footer">
            <el-button @click="editVisible = false">取消</el-button>
            <el-button type="primary">确认</el-button>
        </span>
    </el-dialog>
</div>
  
</template>

<script>
import {fetchData} from '../../api/index'
export default {
    data(){
        return {
            query:{
                address:"",
                pageIndex:1,
                pageSize:10
            },
            tableData:[],
            pageTotal:4,
            idx:-1,
            id:-1,
            form:{},
            editVisible:false
     
   
}
        
    },
    methods:{
        handleSearch(){},
        handleEdit(index,row){
            this.idx=index
            this.form=row
            this.editVisible = true
        },
        handlePageChange(){
            return 
        },
        handleSelectionChange(){
            return 
        },
        getData(){
            fetchData(this.quert).then(res=>{
                console.log(res)
                this.tableData = res.data.data.list
                this.pageIndex = res.data.data.pageTotal || 50
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>

<style>
.mr10{
    margin-right: 10px;
}
.handle-select{
    width: 150px;
}
.handle-input{
    width: 300px;

}
.table-td-thumb{
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
.handle-box{
    margin-bottom: 20px;
}
.table{
    width: 100%;
    font-size: 14px;
}
.red{
    color: red;
}

</style>