<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="8">
            <el-card shadow="hover" class="mgb20" style="height:252px">
                <div class="user-info">
                    <img src="../../assets/img/user.png" class="user-avator" alt="">
                    <div class="user-info-cont">
                        <div class="user-info-name">{{name}}</div>
                        <div>{{role}}</div>
                    </div>
                </div>
                <div class="user-info-list">
                    上次登录时间：
                    <span>2020-07-09</span>
                </div>
                <div class="user-info-list">
                    上次登录地址：
                    <span>苏州</span>
                </div>
            </el-card>
            <el-card shadow="hover" style="height:252px">
                <div class="clearfix" slot="header">
                    <span>语言详情</span>
                </div>Vue
                <el-progress :percentage="71.3" color="#42b983"></el-progress>JavaScript
                <el-progress :percentage="24.1" color="#2aff6d"></el-progress>CSS
                <el-progress :percentage="13.7" color="#ffd3d4"></el-progress>HTML
                <el-progress :percentage="5.9" color="#7af"></el-progress>
            </el-card>
        </el-col>
        <el-col :span="16">
            <el-row :gutter="20" class="mgb20">
                <el-col :span="8">
                    <el-card shadow="hover" :body-style="{padding:'0px'}"> 
                        <div class="grid-content grid-con-1">
                            <i class="el-icon-user-solid grid-con-icon"></i>
                            <div class="grid-content-right">
                                <div class="grid-num">1234</div>
                                <div>用户访问量</div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card shadow="hover" :body-style="{padding:'0px'}"> 
                        <div class="grid-content grid-con-2">
                            <i class="el-icon-message-solid grid-con-icon"></i>
                            <div class="grid-content-right">
                                <div class="grid-num">155</div>
                                <div>系统消息</div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                     <el-card shadow="hover" :body-style="{padding:'0px'}"> 
                        <div class="grid-content grid-con-3">
                            <i class="el-icon-s-check grid-con-icon"></i>
                            <div class="grid-content-right">
                                <div class="grid-num">34</div>
                                <div>数量</div>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-card shadow="hover" style="height:403px;">
                <div slot="header">
                    <span>代办事项</span>
                    <el-button style="float:right; padding :3px 0" type="text">添加</el-button>
                </div>
                <el-table :show-header="false" :data="todoList" style="width:100%">
                    <el-table-column width="40">
                        <template slot-scope="scope"> <!--  slot-scope="scope" 这里取到当前单元格  -->
                            <el-checkbox v-model="scope.row.status"></el-checkbox>
                        </template>
                    </el-table-column>
                    <el-table-column>
                        <template slot-scope="scope">
                            <div
                            class="todo-item"
                            :class="{'todo-item-del':scope.row.status}"
                            >
                                {{scope.row.title}}
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column width="60">
                        <i class="el-icon-edit"></i>
                        <i class="el-icon-delete"></i>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
          <el-col :span="12">
              <el-card shadow="hover">
                  <Schart ref="bar" class="schart" canvasId="bar" :options="options"></Schart>    
              </el-card>
          </el-col>
          <el-col :span="12">
              <el-card shadow="hover">
                  <Schart ref="line" class="schart" canvasId="line" :options="options2"></Schart>
              </el-card>
          </el-col>
      </el-row>
      
          
      
  </div>
</template>

<script>
import Schart from 'vue-schart';
export default {
    components:{
        Schart
    },
    data(){
        return {
            name:'lucg',
            todoList: [
                {
                    title: '今天要修复100个bug',
                    status: false
                },
                {
                    title: '今天要修复100个bug',
                    status: false
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                    status: false
                },
                {
                    title: '今天要修复100个bug',
                    status: false
                },
                {
                    title: '今天要修复100个bug',
                    status: true
                },
                {
                    title: '今天要写100行代码加几个bug吧',
                    status: true
                }
            ], 
             options: {
                type: 'bar',
                title: {
                    text: '最近一周各品类销售图'
                },
                xRorate: 25,
                labels: ['周一', '周二', '周三', '周四', '周五'],
                datasets: [
                    {
                        label: '家电',
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: '百货',
                        data: [164, 178, 190, 135, 160]
                    },
                    {
                        label: '食品',
                        data: [144, 198, 150, 235, 120]
                    }
                ]
            },
            options2: {
                type: 'line',
                title: {
                    text: '最近几个月各品类销售趋势图'
                },
                labels: ['6月', '7月', '8月', '9月', '10月'],
                datasets: [
                    {
                        label: '家电',
                        data: [234, 278, 270, 190, 230]
                    },
                    {
                        label: '百货',
                        data: [164, 178, 150, 135, 160]
                    },
                    {
                        label: '食品',
                        data: [74, 118, 200, 235, 90]
                    }
                ]
            }           
            
        }
    },
    computed:{
        role(){
            return '管理员'
        }
    }
}
</script>

<style scope>
.mgb20{
    margin-bottom: 20px;
}
.user-info{
    display: flex;
    border-bottom: 2px solid #cccccc;
    margin-bottom: 20px;
    padding-bottom: 20px;
    align-items: center;
}
.user-info .user-avator{
    width: 120px;
    height: 120px;
    border-radius: 50%;
}
.user-info-cont{
    flex: 1;
    padding-left: 50px;
    font-size: 14px;
    color: #999;
}
.user-info-name{
    color: #222;
    font-size: 30px;
    
}
.user-info-list{
    color: #999;
    font-size: 14px;
    line-height: 25px;
}
.el-row{
    margin-bottom: 20px;
}
.grid-con-icon{
    font-size: 50px;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #ffffff;
}
.grid-content{
    display: flex;
    align-items: center;
    height: 100px;
}
.grid-num{
    font-size: 30px;
    font-weight: bold;
}
.grid-content-right{
    flex: 1;
    color: #999;
    font-size: 14px;
    text-align: center;
}
.grid-con-1 .grid-con-icon{
    background: rgb(45, 140, 240);
}
.grid-con-1 .grid-num{
    color: rgb(45, 140, 240);
}
.grid-con-2 .grid-con-icon{
    background: rgb(100, 213, 114);
}
.grid-con-2 .grid-num{
    color: rgb(100, 213, 114);
}
.grid-con-3 .grid-con-icon{
    background: rgb(242, 100, 67);
}
.grid-con-3 .grid-num{
    color: rgb(242, 100, 67);
}
.todo-item-del{
    text-decoration: line-through;
    color: #999;
}
.schart{
    height: 300px;
    width: 100%;
}
</style>