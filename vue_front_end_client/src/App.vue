<template>
<div id="app">

    <!-- 导航栏 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">

      <el-menu-item :index="menuItems.home.path" @click="changePage('home')">{{menuItems.home.name}}</el-menu-item>
      <el-menu-item :index="menuItems.post.path" @click="changePage('post')">{{menuItems.post.name}}</el-menu-item>
      <el-menu-item :index="menuItems.login.path" @click="changePage('login')">{{menuItems.login.name}}</el-menu-item>
      <el-menu-item :index="menuItems.about.path" @click="changePage('about')">{{menuItems.about.name}}</el-menu-item>
      
    </el-menu>

      <!--  路由  -->
      <router-view />

  </div>
</template>

<script>
  export default {
    name: 'App',

    mounted() {
      this.activeIndex = this.$route.path;//饿了么没写active动态更新，只能自己写呗
    },


    data(){
      return {
        activeIndex:'/',
        menuItems:{
          home:{path:'/',name:'主页'},
          post:{path:'/post',name:'发表'},
          login:{path:'/login',name:'登录'},
          about:{path:'/about',name:'关于'}
        }
      }
    },

    methods:{
      changePage:function(str){
        let i=this.menuItems[str];
        window.location=i.path;
      }
    },
    }
  
</script>

<style scoped>

</style>  
