<template>
  <div>
      <div class="crumbs">
          <el-breadcrumb seperator="/">
                <el-breadcrumb-item><i class="el-icon-document"></i>表单</el-breadcrumb-item>
                <el-breadcrumb-item>图片上传</el-breadcrumb-item>
          </el-breadcrumb>
      </div>
      <div class="container">
          <div class="content-title">支持拖拽</div>
          <div class="plugins-tips">
              Element UI自带上传组件。
              访问地址：<a href="https://element.eleme.io/#/zh-CN/component/upload" target="_blank">Element UI Upload</a>
          </div>
          <el-upload
                drag
                multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖拽到此处或<em>上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload> 
            <div class="content-title">支持裁剪</div>
          <div class="plugins-tips">
              vue-cropperjs:一个封装了 cropperjs 的Vue组件.
              访问地址：<a href="https://github.com/Agontuk/vue-cropperjs" target="_blank">vue-cropperjs</a>
          </div>
          <div class="crop-demo">
                <img :src="cropImg" class="pre-img" alt="">
                <div class="crop-demo-btn">
                    选择图片<input type="file" class="crop-input" name="image" assept="image/*" @change="setImage">
                </div>
          </div>

          <el-dialog title="裁剪图片" :visible.sync="dialogVisible" width="30%">
              <vue-cropper ref="cropper" :src="imgSrc" :ready="cropImage" :zoom="cropImage" :cropmove="cropImage" style="width:100%;height:300px"></vue-cropper>
              <span slot="footer" class="dialog-footer">
                  <el-button @click="cancleCrup">取消</el-button>
                  <el-button type="primary" @click="dialogVisible = false">确认</el-button>
              </span>
          </el-dialog>

      </div>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs'
export default {
    data(){
        return{
            defaultSrc: require('../../assets/img/user.png'),
                fileList: [],
                imgSrc: '',
                cropImg: '',
                dialogVisible: false,
        }
    },
    components:{
        VueCropper
    },
    methods:{
        setImage(e){
            const file = e.target.files[0]
            console.log(file)
            if(!file.type.includes('image/')) {
                return
            }
            const reader = new FileReader();
            reader.onload=(event)=>{
                this.dialogVisible = true 
                this.imgSrc = event.target.result;
                this.$refs.cropper && this.$refs.cropper.replace(event.target.result)
            }
            reader.readAsDataURL(file)
        },
        cropImage(){
            this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL()
        }
    },
    created(){
        this.cropImg = this.defaultSrc
    }
}
</script>

<style scope>
.content-title{
    font-weight: 400;
    line-height: 50px;
    margin: 10px 0;
    font-size: 22px;
    color: #1f2f3d;
}
.crop-demo{
    display: flex;
    align-items: flex-end;
}
.crop-demo-btn{
    position: relative;
    width: 100px;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    margin-left: 30px;
    background-color: #409eff;
    color: #fff;
    font-size: 14px;
    border-radius: 4px;
    box-sizing: border-box;
}
.crop-input{
    position: absolute;
    width: 100px;
    height: 40px;
    left: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
}
.pre-img{
    width: 100px;
    height: 100px;
    background: #f8f8f8;
    border: 1px solid #eee;
    border-radius: 5px;
}
</style>