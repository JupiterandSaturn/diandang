<template>
  <div id="app">
    <HomePage/>
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/coupon">Coupon</router-link>|
      <router-link to="/Account">Account</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/orderperson">个人订单</router-link>|
    </div>
 

  </div>
</template>

<script>

import HomePage from './components/homepage/index'

export default {
  name: 'app',
  components: {
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
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>


