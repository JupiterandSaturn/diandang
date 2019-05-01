<template>
<div id="account">
  <pageTop></pageTop>
  <div id="content">
      <div id="content_center">
          <div id="content_detail">
            <div id="detail_top_left">
              <h5>账户余额</h5>
              <p>
                  <span>￥&nbsp;0.00</span>
                  <button >提现</button>
              </p>
            </div>
              <hr>
              <div id="detail_top_right">
                  <h5>待入账金额</h5>
                  <p>
                      <span>￥&nbsp;0.00</span>
                  </p>
              </div>
              <hr>
              <div id="detail_bottom">
                  <h5>账户资产明细</h5>
                  <accountTable>
                      <el-table-column></el-table-column>
                  </accountTable>
              </div>

          </div>


      </div>
  </div>
  <pageBottom></pageBottom>
</div>

</template>


<script>
import pageTop from    '@/components/currency/page-top.vue'
import pageBottom from '@/components/currency/page-bottom.vue'
import accountTable from '@/components/account/table.vue'


export default {
  name:"account",
  components :{
    pageTop,
    pageBottom,
      accountTable
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
      #content_detail{
        @include widhei(88.85%,72.58%);
        margin-top:113px;
        background:#fff;
          #detail_top_left{
              float:left;
              @include widhei(540px,294px);
              padding-left:100px;
              h5{
                  text-align: left;
                  padding-top:96px;
                  font-size:20px;
              }
              p{
                  padding-top:50px;
                  text-align: left;
                  span{
                      font-size:36px;
                      padding-right:62px;
                  }
                  button{
                      @include widhei(85px,34px);
                      background:#1B1B1B;
                      @include fontSizCol(14px,#fff,34px);
                      border:none;
                  }
              }
          }
          hr:first-of-type{
              width:1px;
              height:140px;
              float:left;
              color:#878787;
              margin-top:83px;
          }
          #detail_top_right{
              float:left;
              @include widhei(540px,294px);
              padding-left:100px;
              h5{
                  text-align: left;
                  padding-top:96px;
                  font-size:20px;
              }
              p{
                  padding-top:50px;
                  text-align: left;
                  span{
                      font-size:36px;
                      padding-right:62px;
                  }
              }
          }
          hr:nth-of-type(2){
              width:100%;
              color:#707070;
              height:1px;
          }
      }
    }
  }

</style>