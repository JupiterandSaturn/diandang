<template>
  <div>
        <top class="right_top"></top>
        <bottom class="right_bottom"></bottom>
  </div>
</template>

<script>
import bottom from './bottom/bottom.vue'
import top from './top/top.vue'

export default {
  name: 'app',
  components: {
    bottom,top
  }
}
</script>

<style lang="scss" scope>
.right_top{
                  width:359px;
                  height:383px;
                  background: white;
                  margin-top:48px;
                  }
.right_bottom{
                    width:359px;
                    height:303px;
                    background:white;
                    margin-top:32px; 
                  }
</style>