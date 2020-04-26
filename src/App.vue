<template>
   
  <yd-layout >
      <yd-navbar title="">
        <router-link to="#" slot="left">
            <el-avatar @click="alert(11)" src="http://img3m5.ddimg.cn/9/2/23312925-1_b_2.jpg" alt=""> </el-avatar>
        </router-link>
      </yd-navbar>
      <div id = 'app'>
          <router-view/>
      </div>
  
      <yd-tabbar slot="tabbar"  v-if="true"  >
          <yd-tabbar-item title="首页" link="/" active>
              <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
          </yd-tabbar-item>
          <yd-tabbar-item title="推荐" link="/myborrowing" >
              <yd-icon name="home" slot="icon" size="0.54rem"></yd-icon>
          </yd-tabbar-item>
          <yd-tabbar-item title="热门" link="/messageInfo">
              <yd-icon name="feedback" slot="icon" size="0.54rem"></yd-icon>
          </yd-tabbar-item>
          <yd-tabbar-item title="电子书" link="/messageInfo">
              <yd-icon name="feedback" slot="icon" size="0.54rem"></yd-icon>
          </yd-tabbar-item>
          <!-- <yd-tabbar-item title="图片" link="#">
              <img slot="icon" style="height: 25px;" src="path/img/logo.png">
          </yd-tabbar-item> -->
      </yd-tabbar>
  </yd-layout> 

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
