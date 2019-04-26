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
                  width:399px;
                  height:426px;
                  background: white;
                  margin-top:53px;
                  }
.right_bottom{
                    width:399px;
                    height:337px;
                    background:white;
                    margin-top:36px; 
                  }
</style>