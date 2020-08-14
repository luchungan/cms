<template>
  <div class="tags" v-if="showTags">
      <ul>
          <li class="tags-li" v-for="(item,index) in tagList" :class="{'active': isActive(item.path)}" :key="index">
              <router-link :to="item.path" class="tags-li-title">
                  {{item.title}}
              </router-link>
              <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>

          </li>
      </ul>
      <div class="tags-close-box">
          <el-dropdown @command="handleTags">
              <el-button size="mini" type="primary">
                  标签选项<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
               <el-dropdown-menu size="small" slot="dropdown">
                        <el-dropdown-item command="other">关闭其他</el-dropdown-item>
                        <el-dropdown-item command="all">关闭所有</el-dropdown-item>
                  </el-dropdown-menu>
          </el-dropdown>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            tagList:[]
        }
    },
    methods:{
        isActive(path){
            return path === this.$route.fullPath
        },
        closeTags(index){
            const delItem = this.tagList.splice(index,1)[0]
            
            const item = this.tagList[index]? this.tagList[index]:this.tagList[index-1]
            console.log(delItem,item)
            if(item){
                delItem.path === this.$route.fullPath && this.$router.push(item.path)
            }else{
                this.$router.push('/')
            }
        },
        setTags(route){
            const isExist = this.tagList.some(item=>{
                return item.path == route.path
            })
            if(!isExist){
                if(this.tagList.length > 8){
                    this.tagList.shift()
                }
                this.tagList.push({
                    title:route.meta.title,
                    path:route.fullPath,
                    name:"val"
                })
            }
        },
        handleTags(command){
            command==="other"?this.closeOther():this.closeAll()
        },
        closeOther(){
            this.tagList = this.tagList.filter(item=>this.$route.fullPath === item.path)

        },
        closeAll(){
            this.tagList= []
            this.$router.push('/')
        }
    },
    computed:{
        showTags(){
            return this.tagList.length >0
        }
    },
   watch:{
       $route(newval){
           this.setTags(newval)
       }
   }
}
</script>

<style>
.tags{
    position: relative;
    height: 30px;
    background: #ffffff;
    padding-right: 120px;
    box-shadow: 0 5px 10px #dddddd;
    overflow: hidden;
}
.tags ul{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}
.tags-li{
    float: left;
    border-radius: 3px;
    font-size: 12px;
    margin: 3px 5px 2px 3px;
    border: 1px solid #e9eaec;
    background: #ffffff;
    padding: 0 5px 0 12px;
    color: #666666;
    height: 23px;
    line-height: 23px;
    cursor: pointer;    
    -webkit-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    transition: all .3s ease-in;
    overflow: hidden;
}
.tags-close-box{
    position: absolute;
    top:0;
    right:0;
    width: 100px;
    height: 30px;
    text-align: center;
    background:#ffffff;
    padding-top: 1px;
    box-shadow: -3px 0 15px 3px rgba(0,0,0,.1,);
    z-index: 10;
    box-sizing: border-box;
}
.tags-li.active .tags-li-title{
    color: #ffffff;
}
.tags-li-title{
    color: #666;
}
.tags-li.active{
    color:#ffffff;
    background-color:#409EFF
}
.tags-li:not(.active):hover{
    background-color: #f8f8f8;
}
</style>