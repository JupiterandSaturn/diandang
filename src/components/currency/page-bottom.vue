<template>

<div id="bottom">
    <div id="bottom_true">
        <p>

        </p>
        <ul>
            <li><a href="#">手机典当</a></li>
            <li><a href="#">手机典当</a></li>
            <li><a href="#">手机典当</a></li>
            <li><a href="#">手机典当</a></li>
            <li><a href="#">手机典当</a></li>
        </ul>
        <ul>
            <li><a href="#">关于**</a></li>
            <li><a href="#">企业信息</a></li>
            <li><a href="#">细则条款</a></li>
        </ul>
        <p>
            <span></span>
            <span></span>
        </p>
        <p>
            <span>注册我们的账户以获取最新的新闻、公告和特别优惠</span>
            <span></span>
        </p>
    </div>
</div>

</template>

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


#bottom{
  @include widhei(100%,294px);
  background:#1b1b1b;
  padding-top:88px;
    overflow: hidden;

    #bottom_true{
    @include  widhei(1200px,null);
    p:first-of-type{
      @include widhei(40px,40px);
      background:#cecbcb;
      float:left;
    }
    ul{
      float:left;
      li{
        float:none;
        a{
          @include fontSizCol(12px,#e5dfd9,null);
        }
      }
      &:first-of-type{
        padding-left:100px;

      }
      &:nth-of-type(2){
        padding-left:243px;

      }
    }
    p:nth-of-type(2){
      padding-left:247px;
      float:left;
      padding-top:5px;
      span{
        @include widhei(18px,18px);
        background:#fff;
        display:block;
        float:left;
        &:first-of-type{
          margin-right:29px;
        }
      }
    }
    p:nth-of-type(3){
      padding-left:227px;
      float:left;
      span{
        &:first-of-type{
          @include fontSizCol(12px,#e5dfd9,40px);
          width:234px;
          display: block;
          text-align: left;
          float:left;
          padding-bottom:30px
        }
        &:nth-of-type(2){
          @include  widhei(259px,0px);
          border-top:1px solid #f8f7f4;
          display: block;
          overflow: hidden;
        }

      }

    }
  }

}


</style>


