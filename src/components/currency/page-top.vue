<template>

<div id="page_top">
    <div id="pageTop_top">
        <div id="pageTop_top_left">
            <p>
                <a href="#">登录</a>
                <a href="#">关于我们</a>
            </p>
            <p>
                <a href="#">个人中心</a>
                <span></span>
                <a href="#">个人点券</a>
            </p>
        </div>
        <div id="pageTop_top_right">
            
            <img src="@/assets/page-top/magnifier.gif">
            
            <ul>
                <li><a href="#">购物袋</a></li>
                <li><a href="#">个人中心</a></li>
            </ul>
        </div>
        <div id="pageTop_top_center">
            <p>公司名称</p>
            <ul>
            
                <li v-for="i in $store.state.PageTop.typename"><a href="#">{{i.typeName}}回收</a> </li>
        
            </ul>
            <h1>个人卡券</h1>
        </div>

    </div>
    <div id="pageTop_bottom">

    </div>
</div>
</template>

<script>
import Vue from 'vue'
export default {

  mounted(){
    this.$store.dispatch("getTitle")
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
    @include widhei(100%,373px);
    background:url("../../assets/coupon/top.png") ;
    background-size: auto;
    #pageTop_top{
			overflow: hidden;
      @include widhei(100%,null);
      #pageTop_top_left{
        float:left;
         width:308px;
        p:first-of-type{
          padding:24.62px 0 76px 44px;
          a{
            &:first-of-type{padding-right:45.76px;}
            font-size:14px;
            color:#e5dfd9;
          }
        }
        p:last-of-type{

          @include widhei(219px,50px);
          border:1px solid #fff;
          padding-left:17px;
          a{
            @include fontSizCol(14px,#fff,50px);
            margin-right:23px;
          }
          span{
            width:0px;
            height:26px;
            border-left:1px solid #fff;
            line-height:50px;
            margin-right:23px;
          }
        }
      }
      #pageTop_top_right{
        padding-top:20px;
        float:right;
        width:414px;
        img{
          @include widhei(38px,38px);
          float: right;
          margin:0 39px 0 50px;
        }
        ul{
          @include widhei(null,50px);
          li{
            float:right;
            padding-left:76px;
            &:last-of-type{
              padding-left:0;
            }
            a:before{
              width:16px;
              padding-right:8px;
            }
            &:first-of-type{
              a:before{
                content:url("../../assets/page-top/cart.png");
                
              }
            }
            &:nth-of-type(2){
              a:before{
                content:url("../../assets/page-top/heart.png");
                
              }
            }
            a{
              float:right;
              @include fontSizCol(14px,#e5dfd9,39px);
            }
          }
        }
      }
      #pageTop_top_center{
        @include widhei(640px,null);
        // overflow: hidden;
          &>p{
            @include  widhei(213px,52px);
            background:#d4cec9;
            font-size:20px;
            line-height:52px;
            text-align: center;
            margin-top:20px;
          }
        &>ul{
          overflow: hidden;
          padding-top:20px;
          padding-bottom:94px;
          @include widhei(100%,null);
          li{
            padding-right:52px;
            a{
              @include fontSizCol(16px,#f8f7f4,null);
            }
            &:last-of-type{
              padding-right:0px;
            }
          }
        }
        h1{
          //@include widhei(36px,#ffffff,null);
          font-size:36px;
          text-align:center;
          font-weight:normal;
          color:#ffffff;

        }
      }
    }
  }

</style>


