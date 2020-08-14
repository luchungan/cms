<template>
  <div>
      <div class="crumbs">
          <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-document"></i>表单</el-breadcrumb-item>
                <el-breadcrumb-item>markdown编辑器</el-breadcrumb-item>
          </el-breadcrumb>
      </div>
      <div class="container">
          <div class="plugins-tips">
              mavonEditor:基于Vue的markdown编辑器。
              访问地址：<a href="https://github.com/hinesboy/mavonEditor" target="_blank">mavonEditor</a>
          </div>
            <mavonEditor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height:600px"></mavonEditor>
          
          <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
      </div>
  </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    name:'markdown',
    data(){
        return{
            content:'',
            html:'',
            config:{}
        }
    },
    components:{
        mavonEditor
    },
    methods:{
        change(){},
        submit(){},
        $imgAss(){}
    }
}
</script>

<style>

</style>