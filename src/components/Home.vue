<template>
  <div class="wraper">
      <v-header></v-header>
      <v-sidebar></v-sidebar>
      <div class="content-box" :class="{'content-collapse':collapse}">
          <v-tags></v-tags>
          <div class="content">
              <transition name="move" mode="out-in">
                  <keep-alive>
                      <router-view></router-view>
                  </keep-alive>
              </transition>
              
          </div>
      </div>
  </div>
</template>

<script>
import bus from './common/bus'
import vHeader from './Header.vue'
import vSidebar from './Sidebar.vue'
import vTags from './Tags.vue'
export default {
    data(){
        return {
                collapse:false
            }
    },
    components:{
        vHeader,
        vSidebar,
        vTags
    },
    created(){
        bus.$on('content-collapse',msg=>{
            this.collapse = msg
        })
    }
}
</script>

<style>
    
</style>