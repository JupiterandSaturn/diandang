<template>
  <div id="app">

      <router-link to="/index">首页</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/coupon">优惠券</router-link>|
      <router-link to="/Account">个人账户</router-link>|
      <router-link to="/aboutUs">关于我们</router-link>|
      <router-link to="/ConfigurationSelection">配置选择</router-link>|
      <router-link to="/Evaluation">评价回顾</router-link>|
         <router-link to="/login">登录</router-link>|
      <router-link to="/orderperson">个人订单</router-link>|
      <router-link to="/personalInformation">个人信息</router-link>|
      <router-link to="/orderInformation">订单信息</router-link>|
      <router-link to="/form">来自</router-link>|
      <router-link to="/second">二级菜单</router-link>|
      <router-link to="/third">三级菜单</router-link>|
      <router-link to="/shopcar">购物车</router-link>|


      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>


<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    /*padding: 30px;*/
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
