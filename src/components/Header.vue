<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChange">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">后台管理系统</div>
    <div class="header-right">
      <div class="header-user-con">
        <div class="btn-fullscreen" @click="handleFullScreen">
          <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>

        <div class="btn-bell">
          <el-tooltip effect="dark" :content="message?`有${message}条消息未读`:`消息中心`" placement="bottom">
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>

        <div class="user-avator">
          <img src="../assets/img/user.png" alt />
        </div>

        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                {{username}}
                <i class="el-icon-caret-bottom"></i>
            </span>
        
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>项目仓库</el-dropdown-item>
          <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import bus from './common/bus'
export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      message: 2,
      username:'lucg'
    };
  },
  methods: {
    collapseChange() {
      this.collapse = !this.collapse;
      bus.$emit('collapse',this.collapse)
    },
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (element.exitFullscreen) {
          element.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }

      this.fullscreen = !this.fullscreen;
    },
    handleCommand(command){
        if(command == "loginout"){
            alert('login')
        }
    }
  },
  mounted(){
      if(document.body.clientWidth < 1500){
          this.collapseChange()
      }
  },

};
</script>

<style scope>
.header {
  color: #fff;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  position: relative;
}
.collapse-btn {
  float: left;
  line-height: 70px;
  cursor: pointer;
  padding: 0 21px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  height: 70px;
  display: flex;
  align-items: center;
}
.btn-fullscreen {
  margin-right: 5px;
  transform: rotate(45deg);
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.user-avator {
  margin-left: 20px;
}
.user-name{
    margin-left: 10px;
}
.user-avator img {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.el-dropdown-link{
    color: #fff;
    cursor: pointer;
}

</style>