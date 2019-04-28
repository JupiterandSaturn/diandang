<template>
<div class='top'>
    <ul>
        <li><input type='checkbox'></li>
        <li><span> 全选</span></li>
        <li class='one'>|</li>
        <li><span> 删除 </span></li>
    </ul>
</div>
</template>
<script>
export default {
                name:'top',
              }
</script>
<style scope>
.top input{
            margin-left:33px;
            margin-top:55px;
            width:18px;
            height:18px;
            background:rgba(255,255,255,1);
            opacity:1;
            } 
.top .one{
           margin-left:10px;
           margin-top:52px;
           color:rgba(135,135,135,1);
         } 
.top ul li span{
                width:28px;
                height:19px;
                font-size:14px;
                font-family:Microsoft YaHei;
                font-weight:400;
                line-height:19px;
                color:rgba(5,5,5,1);
                opacity:1;
                display: block;
                margin-left:19px;
                margin-top:53px;
               }  
</style>
