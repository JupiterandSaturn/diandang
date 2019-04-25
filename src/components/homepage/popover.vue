<template>
   <el-popover class='popover'
                placement="top-start"
                title="标题"
                type=''
                trigger="hover"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <el-button slot="reference">hover 激活</el-button>
</template>
<script>
export default {
    name:'popover',
    data(){
        return{
             popo:[
                 {
                  //  title:
                  //  type :,

                 },
                 {
                  //  title:,
                  //  type:,
                 },
             ]
               }
    }
}
</script>
<style>
  /* .popover{ */
           /* width:;
           height:;
  } */
</style>