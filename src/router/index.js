/**
 * 配置路由的路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home/home.vue'
import allproducts from '../components/allproducts/allproducts.vue'
import stroll from '../components/stroll/stroll.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import usercenter from '../components/usercenter/usercenter.vue'


Vue.use(VueRouter);

export default new VueRouter({
  //linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path:'/home',
      component: home
    },
    {
      path:'/allproducts',
      component:allproducts
    },
    {
      path:'/stroll',
      component:stroll
    },
    {
      path:'/shopcart',
      component:shopcart
    },
    {
      path:'/usercenter',
      component:usercenter
    }
  ]
})
