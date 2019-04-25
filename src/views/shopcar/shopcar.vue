<template>
    <div class='main'>
        <div class='main_1'>
            <Left class="main_left"></Left>
            <Right class="main_right"></Right>
        </div>
    </div>
</template>

<script>
import Left from './left/left.vue'
import Right from './right/right.vue'

export default {
  name: 'app',
  components: {
    Left,Right
  }
}
</script>

<style lang="scss">
*{
    margin:0;
    padding:0;
  }
ul li{
    text-decoration: none;
    list-style:none;
    float:left;
  }
ol li{
   text-decoration: none;
   list-style:none;
   float:left;
 }
  
a{
 text-decoration:none;
}
.body{
      width: 100%;
}
.main{
      height:961px;
      width:100%;
      display: inline-block;
     }
.main .main_1{
              width:1330px;
              height:925px;
              background:rgba(231,231,231,1);
              opacity:1;
              margin:0 auto;
              margin-top:18px;
              }
.main_left{
                 width:859px;
                 height:925px;
                 float:left;
                 margin-left:33px;
                 } 
.main_right{
                  width:399px;
                  height:925px;
                  float:right;
                  margin-right:38px;
                 }  
</style>