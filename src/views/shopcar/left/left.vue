<template>
  <div class="main_left">
        <middle class="left_middle"></middle>
  </div>
</template>

<script>
import middle from './middle/middle.vue'
import top from './top/top.vue'

export default {
  name: 'app',
  components: {
    middle
  }
}
</script>

<style lang="scss" scope>
.main_left{
                 width:859px;
                 height:925px;
                 float:left;
                 margin-left:33px;
                 } 
.main_left .left_top{
                           width:859px;
                           height:82px;
                           border-bottom:1px solid rgba(200,200,200,1);
                          } 
.main_left .left_middle{
                              width:859px;
                              height:232px;
                            
                              border-bottom:1px solid rgba(200,200,200,1);
                              } 
</style>