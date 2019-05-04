<template>
  <div id="app">


      <router-link to="/">Home</router-link> |
      <router-link to='/second'>Second</router-link> |
      <router-link to='/third'>Third</router-link>  |
      <router-link to="/about">About</router-link>|
      <router-link to="/coupon">Coupon</router-link>|
      <router-link to="/Account">Account</router-link>|
      <router-link to="/aboutUs">aboutUs</router-link>|
      <router-link to="/ConfigurationSelection">ConfigurationSelection</router-link>|
      <router-link to="/Evaluation">Evaluation</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to='/shopcar'>Shopcar</router-link>  |
      <router-link to="/orderperson">个人订单</router-link>|
      <router-link to="/personalInformation">个人信息</router-link>|
      <router-link to="/orderInformation">订单信息</router-link>|
      <router-link to='/success'>订单成功</router-link>
    <router-view/>
  </div>
</template>

<script>


import HomePage from './components/homepage/index'


export default {
  name: 'app',
  components:{
    HomePage
  }
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


