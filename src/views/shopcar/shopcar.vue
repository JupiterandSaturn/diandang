<template>
    <div class='shopcar'>
        <div class='main'>
            <Left class="main_left"></Left>
            <Right class="main_right"></Right>
        </div>
    </div>
</template>

<script scope>
import Left from './left/left.vue'
import Right from './right/right.vue'

export default {
  name: 'app',
  components: {
    Left,Right
  }
}
</script>

<style lang="scss" scope>
*{
    margin:0;
    padding:0;
  }
.shopcar ul li{
    text-decoration: none;
    list-style:none;
    float:left;
  }
.shopcar ol li{
   text-decoration: none;
   list-style:none;
   float:left;
 }
  
.shopcar a{
 text-decoration:none;
}
.body{
      width: 100%;
}
.shopcar{
      height:961px;
      width:100%;
      display: inline-block;
     }
.shopcar .main{
              width:1330px;
              height:925px;
              background:rgba(231,231,231,1);
              opacity:1;
              margin:0 auto;
              margin-top:18px;
              }
.shopcar .main_left{
                 width:859px;
                 height:925px;
                 float:left;
                 margin-left:33px;
                 } 
.shopcar .main_right{
                  width:399px;
                  height:925px;
                  float:right;
                  margin-right:38px;
                 }  
</style>