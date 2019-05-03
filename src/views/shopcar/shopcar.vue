<template>
    <div class='shopcar'>
        <div class='main'>
          <Head></Head>
            <Left class="main_left"></Left>
            <Right class="main_right"></Right>
            <Foot></Foot>
        </div>
    </div>
</template>

<script scope>
import Head from '@/components/currency/page-top.vue'
import Left from './left/left.vue'
import Right from './right/right.vue'
import Foot from '@/components/currency/page-bottom.vue'

export default {
  name: 'app',
  components: {
    Head,
    Left,Right,
    Foot
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
      height:832.5px;
      width:100%;
      display: inline-block;
     }
.shopcar .main{
              width:1200px;
              // height:832.5px;
              background:rgba(231,231,231,1);
              opacity:1;
              margin:0 auto;
              }
.shopcar .main_left{
                 width:773px;
                 height:832.5px;
                 float:left;
                 margin-left:30px;
                 } 
.shopcar .main_right{
                  width:359px;
                  height:832.5px;
                  float:right;
                  margin-right:38px;
                 }  
</style>