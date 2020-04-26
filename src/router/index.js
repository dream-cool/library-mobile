import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve =>  require(['@/components/Index.vue'], resolve),
      children: [
        {
          path: '/index',
          name: '首页',
          component: resolve =>  require(['@/components/Index.vue'], resolve)
        }
      ]
    },
    {
      path: '/login',
      name: '登录',
      component: resolve =>  require(['@/components/Login.vue'], resolve)
    },
    {
      path: '/test',
      name: '登录',
      component: resolve =>  require(['@/components/Test.vue'], resolve)
    },
    
  ]
})
