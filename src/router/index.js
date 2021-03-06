import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'
import vueConfig from '../../vue.config'
// 开始业务逻辑
const login = () => import('../views/login')
// 布局页
const home = () => import('../views/layout')
// 欢迎页
const welcome = () => import('../views/home/welcome')
// 商铺管理
const shopsList = () => import( /* webpackChunkName: "shopmanage" */ '../views/shops/shops-list')
const shopDetail = () => import( /* webpackChunkName: "shopmanage" */ '../components/shops/shoplist/shop-detail')
const businessAnalysis = () => import( /* webpackChunkName: "shopmanage" */ '../components/shops/shoplist/business-analysis')
const productList = () => import( /* webpackChunkName: "shopmanage" */ '../views/shops/product-list')
const openShop = () => import( /* webpackChunkName: "shopmanage" */ '../views/shops/open-shop')
const openShopAudit = () => import( /* webpackChunkName: "shopmanage" */ '@/components/shops/open-shop-audit.vue')
const shopRight = () => import( /* webpackChunkName: "shopmanage" */ '../views/shops/shop-right')
const shopIndustry = () => import( /* webpackChunkName: "shopmanage" */ '../views/shops/shop-industry')
const productCategroy = () => import( /* webpackChunkName: "shopmanage" */ '../views/shops/product-categroy')
const productSubCategroy = () => import( /* webpackChunkName: "shopmanage" */ '../views/shops/product-subcategory')
// 商圈管理
const publicBusinessDistrict = () => import( /* webpackChunkName: "businiess" */ '../views/business-district/public-business-district')
const personalBusinessDistrict = () => import( /* webpackChunkName: "businiess" */ '../views/business-district/personal-business-district')
// 订单管理模块
const orderList = () => import( /* webpackChunkName: "order" */ '../views/order/order-list')
const orderCalculation = () => import(/* webpackChunkName: "order" */ '../views/order/order-calculation')
// 优惠卷管理
const discount = () => import( /* webpackChunkName: "discount" */ '../views/discount/discount')
const shopDiscount = () => import( /* webpackChunkName: "discount" */ '../views/discount/shop-discount')
// 推广列表
const commentList = () => import( /* webpackChunkName: "commentList" */ '../views/commentList/commentList')
// 推广详情
const promotionDetails = () => import( /* webpackChunkName: "promot" */ '../views/commentList/promotionDetails')
// 素材管理
const publicMaterial = () => import( /* webpackChunkName: "material" */ '../views/material/public-material')
const material = () => import( /* webpackChunkName: "material" */ '../views/material/material')
const userMaterial = () => import( /* webpackChunkName: "material" */ '../views/material/user-material')
// 财务管理
const finance = () => import( /* webpackChunkName: "finance" */ '../views/finance/finance')
const financeOut = () => import( /* webpackChunkName: "finance" */ '../views/finance/finance-out')
const financeJion = () => import( /* webpackChunkName: "finance" */ '../views/finance/finance-jion')
// 系统设置
const user = () => import( /* webpackChunkName: "systemseting" */ '../views/setting/user')
const parms = () => import( /* webpackChunkName: "systemseting" */ '../views/setting/parms')


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/home',  // 因为重定向 不需要再定义名称
    // name:'name',
    component: home,
    children: [
      {
        path: '/',
        redirect: '/home/welcome',
      },
      {
        path: '/home/welcome',
        name: 'welcome',
        component: welcome,
        meta: { levelOne: '站点统计', levelTow: '' },
      },
      // 商铺管理模块
      {
        path: '/home/shops/shopsList',
        name: 'shopsList',
        component: shopsList,
        meta: { levelOne: '商铺管理', levelTow: '商铺列表' },
      },
      {
        path: '/home/shops/shopDetail',
        name: 'shopDetail',
        component: shopDetail,
        meta: { levelOne: '店铺详情', levelTow: '' },
      },
      {
        path: '/home/shops/businessAnalysis',
        name: 'businessAnalysis',
        component: businessAnalysis,
        meta: { levelOne: '经营分析', levelTow: '' },
      },
      {
        path: '/home/shops/productList',
        name: 'productList',
        component: productList,
        meta: { levelOne: '商铺管理', levelTow: '商品列表' },
      },
      {
        path: '/home/shops/openShop',
        name: 'openShop',
        component: openShop,
        meta: { levelOne: '商铺管理', levelTow: '开店审核' },
      },
      // 开店审核表单
      {
        path: '/home/shops/openShop/audit',
        name: 'shopAudit',
        component: openShopAudit,
      },
      {
        path: '/home/shops/shopRight',
        name: 'shopRight',
        component: shopRight,
        meta: { levelOne: '商铺管理', levelTow: '店铺权益设置' },
      },
      {
        path: '/home/shops/shopIndustry',
        name: 'shopIndustry',
        component: shopIndustry,
        meta: { levelOne: '商铺管理', levelTow: '店铺行业管理' },
      },
      {
        path: '/home/shops/productCategroy',
        name: 'productCategroy',
        component: productCategroy,
        meta: { levelOne: '商铺管理', levelTow: '商品类别管理' },
      },
      {
        path: '/home/shops/productSubCategroy/:id',
        name: 'productSubCategroy',
        component: productSubCategroy,
        meta: { levelOne: '商铺管理', levelTow: '商品子类别管理' },
        props: true
      },
      // 商圈管理模块
      {
        path: '/home/publicBusinessDistrict',
        name: 'publicBusinessDistrict',
        component: publicBusinessDistrict,
        meta: { levelOne: '商圈管理', levelTow: '共享商圈管理' },
      },
      {
        path: '/home/personalBusinessDistrict',
        name: 'personalBusinessDistrict',
        component: personalBusinessDistrict,
        meta: { levelOne: '商圈管理', levelTow: '个人商圈管理' },
      },
      // 订单管理
      {
        path: '/home/orderList',
        name: 'orderList',
        component: orderList,
        meta: { levelOne: '订单管理', levelTow: '订单列表' },
      },
      {
        path: '/home/orderCalculation',
        name: 'orderCalculation',
        component: orderCalculation,
        meta: { levelOne: '订单管理', levelTow: '订单统计' },
      },
      // 优惠卷管理
      {
        path: '/home/discount',
        name: 'discount',
        component: discount,
        meta: { levelOne: '优惠卷管理', levelTow: '通用优惠卷' },
      },
      {
        path: '/home/shopDiscount',
        name: 'shopDiscount',
        component: shopDiscount,
        meta: { levelOne: '优惠卷管理', levelTow: '店铺优惠卷' },
      },
      // 推广列表
      {
        path: '/home/commentList',
        name: 'commentList',
        component: commentList,
        meta: { levelOne: '推广列表' },
      },
      // 推广列表
      {
        path: '/home/commentList/details/:id',
        name: 'PromotionDetails',
        component: promotionDetails,
        meta: { levelOne: '推广列表', levelTow: '推广详情' },
      },
      // 素材管理
      {
        path: '/home/publicMaterial',
        name: 'publicMaterial',
        component: publicMaterial,
        meta: { levelOne: '素材库管理', levelTow: '官方素材库' },
      },
      {
        path: '/home/material',
        name: 'material',
        component: material,
        meta: { levelOne: '素材库管理', levelTow: '素材审核' },
      },
      {
        path: '/home/userMaterial',
        name: 'userMaterial',
        component: userMaterial,
        meta: { levelOne: '素材库管理', levelTow: '用户素材管理' },
      },
      // 财务管理
      {
        path: '/home/finance',
        name: 'finance',
        component: finance,
        meta: { levelOne: '财务管理', levelTow: '提现管理' },
      },
      {
        path: '/home/financeOut',
        name: 'financeOut',
        component: financeOut,
        meta: { levelOne: '财务管理', levelTow: '平台收入明细' },
      },
      {
        path: '/home/financeJion',
        name: 'financeJion',
        component: financeJion,
        meta: { levelOne: '财务管理', levelTow: '平台支出明细' },
      },
      // 系统设置
      {
        path: '/home/user',
        name: 'user',
        component: user,
        meta: { levelOne: '系统设置', levelTow: '账号设置' },
      },
      {
        path: '/home/parms',
        name: 'parms',
        component: parms,
        meta: { levelOne: '系统设置', levelTow: '参数设置' },

      },
    ],
  },
]

// 解决路由重复报错

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

const router = new VueRouter({
  routes
})

// 路由拦截方案1
// 这个方案是保存了token，在下次访问的时候去拿这个token判断就好了，有的就放行，没令牌的就不放行
router.beforeEach((to, from, next) => {
  // 注意，在服务器上，使用的是打标识的方式，如果我们登录了，服务器就记住我们，然后给我们
  // 返回一个字符串 ‘ var isLogin = true; var userId=id   || var isLogin = false  ’
  const token = window.sessionStorage.getItem('token')

  if( token &&  to.path === '/login' ){
    return next('/home')
  }

  if ( token  ){ return next()  }

  if( to.path !== '/login' ){ 
<<<<<<< HEAD
    Message.warning('您还没有登录，请先登录')
=======
      Message.warning('您还没有登录，请先登录')
>>>>>>> ad7f1efa8104de682b1c106a46ca0aa6d31c7cf6
    return next('/login')
  }

  next()
})

// 路由拦截方案2 给路由打标签，如果是pubinc就公开的，允许访问，否则就需要验证
// 这里不纤细的列举出来

export default router
