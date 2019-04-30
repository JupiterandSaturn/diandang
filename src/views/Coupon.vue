<template>
<div id="coupon">
<pageTop></pageTop>
<div id="content">
    <div id="content_center">
        <p>
            <span></span>
            <span></span>
            <span>全部卡券</span>
        </p>
        <div id="picture">
            <img src="@/assets/coupon/left_arrow.gif">
            <img src="@/assets/coupon/right_arrow.gif">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</div>
<pageBottom></pageBottom>
</div>

</template>


<script>
import pageTop from    '@/components/currency/page-top.vue'
import pageBottom from '@/components/currency/page-bottom.vue'


export default {
  name:"coupon",
 
  components :{
    pageTop,
    pageBottom
  }
}
</script>






<style lang="scss" scoped>

@mixin widhei($width,$height){
	width:$width;
	height:$height;
}
@mixin widheitlong($width,$height,$background,$border,$borderRadius){
	@include widheit($width,$height);
	background:$background;
	border:$border;
	border-radius:$borderRadius;
}

@mixin fontSizCol($fSize,$fColor,$lineHeight){
	font-size:$fSize;
	color:$fColor;
	text-align: center;
	line-height: $lineHeight;
}


a{text-decoration:none;}
*{
	margin:0 auto;
	padding:0;
}
li,dt,dd{

	list-style:none;
	float:left;
}



  #content{
    @include widhei(100%,null);
    background:#fff;
    #content_center{
      @include  widhei(null,689px);
      margin:18px;
      background:#e7e7e7;
      &>p{
        width:1074px;
        padding-top:55px;
        span{
          &:first-of-type{
            float:left;
            @include widhei(468px,0px);
            border-bottom:1px solid #707070;
            margin-top:19px;
          }
          &:nth-of-type(2){
            float:right;
            @include widhei(468px,0px);
            border-bottom:1px solid #707070;
            margin-top:19px;
          }
          &:last-of-type{
            @include fontSizCol(28px,#000,37px);
            text-align: center;
            display: block;
          }
        }
      }

      #picture{
        width:1242px;
        padding-top:56px;
        img{
          @include widhei(28px,85px);
          margin-top:179px;
          &:first-of-type{
            float:left;
          }
          &:last-of-type{
            float:right;
          }
        }
        ul{
          width:1078px;
          li{
            @include widhei(265px,459px);
            background:#fff;
            margin-right:6px;
            &:last-of-type{
              margin-right:0;
            }
          }
        }
      }
    }
  }


</style>