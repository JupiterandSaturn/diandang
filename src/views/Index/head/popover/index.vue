<template>
          <div class="head_bottom">
            <ul v-for="(item,index) in ullist" :key='index' slot='reference'>
                 <!-- <li><a href="#" class="bt_1"></a>-->
                 
                 <!-- <li><a href="#" class="bt_2">平板电脑回收</a></li>
                 <li><a href="#" class="bt_3">笔记本回收</a></li>
                 <li><a href="#" class="bt_4">摄影摄像回收</a></li>
                 <li><a href="#" class="bt_5">智能数码回收</a></li> -->
             </ul> 
        
  </div>
</template>

<script>
export default {
      data(){
          return{
              ullist:[
                       '<a href="#" class="bt_1">手机回收</a></li>',               
                       '平板电脑回收',
                       '笔记本回收',
                       '摄影摄像回收',
                       '智能数码回收'
                     ],
                flag: this.$router
          }
      },
      creared() {
          console.log(this)
      },
      methods:{
           
      },
      components:{
        one:{
            template:`<div>one</div>`
        },
        two:{
            template:`<div>two</div>`
        },
        three:{
            template:`<div>three</div>`
        },
        four:{
            template:`<div>four</div>`
        },
        five:{
            template:`<div>five</div>`
        },
      }

</script>

<style scope>
 .el-popover{
             width:600px;
             height:300px;
             background:red
            }
</style>

