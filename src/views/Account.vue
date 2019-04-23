<template>
<div id="account">
  <pageTop></pageTop>
  <div id="content">
      <div id="content_center">
          <div id="picture">
            
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
  name:"account",
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
#page_top{
    background:url("../assets/account/fb0a0c3239fc3cbc67596886761d02d.png") ;
}

  #content{
    @include widhei(100%,null);
    background:#fff;
    #content_center{
      @include  widhei(null,828px);
      margin:18px;
      background:#e7e7e7;
      overflow: hidden;
      #picture{
        @include widhei(88.85%,72.58%);
        margin-top:113px;
        background:#fff;
      }
    }
  }

</style>