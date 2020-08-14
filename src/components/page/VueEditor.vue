<template>
  <div>
      <div class="crumbs">
          <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-document"></i>表单</el-breadcrumb-item>
                <el-breadcrumb-item>编辑器</el-breadcrumb-item>
          </el-breadcrumb>
      </div>
      <div class="container">
          <div class="plugins-tips">
              Vue-Quill-Editor:基于Quill、适用于Vue2的富文本编辑器。
              访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
          </div>
          <quillEditor class="my-quilledit" ref="myTextEditor" v-model="content" :options="editorOption"></quillEditor>
          <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
      </div>
      
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor'
export default {
    name:'editor',
    data(){
        return{
            content:'',
            editorOption:{
                placeholder:"Hello world"
            }
        }
    },
    components:{
        quillEditor
    },
    methods:{
        submit(){
            console.log(this.content)
        }
    }
}
</script>

<style>
.plugins-tips{
    padding: 20px 10px;
    margin-bottom: 20px;
    background: #f0f0f0;
}
.editor-btn{
    margin-top: 80px;
}
.my-quilledit{
    height: 300px;
}
</style>