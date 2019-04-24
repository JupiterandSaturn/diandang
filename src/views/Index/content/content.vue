<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="(item,index) in pic" :key="index" >
      <h3><img :src="item"/></h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
    data(){
        return{
            pic:[
              require('../../../../public/images/imgPersonal/round1.png'),
              require('../../../assets/logo.png'),
              require('../../../assets/logo.png')
            ]   
        }
    }
}
</script>

<style>
.el-carousel-item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 500px;
    margin: 0;
  }
  
  .el-carousel-item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel-item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /* .el-carousel{
             width:100%;
             height:500px;
  } */
  .item-img img{
                  width:100%;
                  height: 100%;
  }
</style>