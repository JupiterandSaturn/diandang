<template>
          <div class="head_bottom">
            <ul v-for="(item,index) in ullist" :key='index' slot='reference'>
                 <!-- <li><a href="#" class="bt_1">手机回收</a></li> -->
                 <!-- <li><a href="#" class="bt_2">平板电脑回收</a></li>
                 <li><a href="#" class="bt_3">笔记本回收</a></li>
                 <li><a href="#" class="bt_4">摄影摄像回收</a></li>
                 <li><a href="#" class="bt_5">智能数码回收</a></li> -->
             </ul> 
        <el-popover
            placement="head_bottom"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">hover 激活</el-button>
       </el-popover>
  </div>
</template>

<<script>
export default {
      data(){
          return{
              ullist:[
                       '<a href="#" class="bt_1">手机回收</a></li>',               
                       '平板电脑回收',
                       '笔记本回收',
                       '摄影摄像回收',
                       '智能数码回收'
                     ]
          }
      },
      methods:{
           fn(){
               this.index+=1;
               if(htis.index>4)
                 this.index=0;
           }
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

<style>
 .el-popover{
             width:600px;
             height:300px;
             background:red
            }
</style>

