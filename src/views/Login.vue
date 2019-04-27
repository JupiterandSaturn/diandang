<template>
<div id="login">
<pageTop></pageTop>
<div id="content">
   <h3>登录</h3>

   <div class="content-logo"><img src="../assets/login/login2.png" alt=""></div>
   
   <div class="content-login">
       <div class="context-login-list">
           <span>用户账号</span>
           <input type="text" name="" id="">
           <span>密码</span>
           <input type="text" name="" id="">
           <p><input type="checkbox" name="check"  id="check" value="十天免密登录">十天免密登录</p>
            <input type="button"name="btn" id="btn" value="登录">
            <a href="javascript:;">忘记密码?</a>
       </div>
     
       <register></register>
   </div>
</div>
<pageBottom></pageBottom>
</div>

</template>


<script>
import register from '@/components/register/index.vue'
import pageTop from    '@/components/currency/page-top-min.vue'
import pageBottom from '@/components/currency/page-bottom.vue'

export default {
  name:"login",
  components :{
    pageTop,
    pageBottom,
    register
  }
}
</script>






<style lang="scss" scoped>

@mixin widhei($width,$height){
	width:$width;
	height:$height;
}


a{text-decoration:none;}
*{
	margin:0;
	padding:0;
}



  #content{
    margin:0 auto;
    margin-top:18px;
    margin-bottom:21px;
   
    @include widhei(1200px,931px);
   
background:rgba(231,231,231,1);
position:relative;

   h3{
       width:880px;
        height:47px;
        font-size:36px;
        font-weight:400;
        line-height:47px;
        color:rgba(27,27,27,1);
        opacity:1;
        padding:60px 0 19px 0;
        margin:0 auto;
         border-bottom:1px solid rgba(212,206,201,1);

   }
   .content-logo{
     position:absolute;
     left:650px;
     top:117px;
   }
   .content-login{
     width:880px;
     margin:0 auto;
     .context-login-list{
       margin-top:30px;
       border-right:1px solid rgba(255,255,255,1);

       height:396px;
       width:440px;
       margin-left:54px;
       float:left;
       span{
         
         display: inline-block;
          width:440px;
          height:19px;
          font-size:14px;
          text-align: left;
          font-weight:400;
          line-height:19px;
          color:rgba(27,27,27,1);
          opacity:1;
          padding-bottom:10px;
       }
       span:first-of-type{
         padding-top:40px;
       }
         span:nth-of-type(2){
         padding-top:19px;
       }
       input:first-of-type,input:nth-of-type(2){
         width:342px;
         float:left;
          height:44px;
          background:rgba(255,255,255,1);
          opacity:1;
         
       }
       #check{
         width:19px;
height:19px;
background:rgba(255,255,255,1);
opacity:1;
margin-right: 10px;
       }
       p{
         clear:both;
         font-size:14px;
        text-align: left;
        padding-top:17px;
        
       }
       #btn{
         border:none;
         width:342px;
        height:44px;
        background:rgba(27,27,27,1);
        opacity:1;
        margin-top:38px;

        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        float:left;
        color:rgba(212,206,201,1);
        opacity:1;
       }
       a{
         clear:both;
         display:block;
         width:64px;
height:19px;
font-size:14px;
padding:11px 0 0 140px;

font-weight:400;
line-height:19px;
color:rgba(153,153,153,1);
opacity:1;
       }
       
     }
  
   }
   
  }


</style>