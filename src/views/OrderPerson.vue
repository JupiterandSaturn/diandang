<template>
<div id="login">
<pageTop></pageTop>
<div id="content">
    <div class="order-title">
				<h2 class="order-num">未完成 <span>(99+)</span></h2>
				<ul class="order-contact">
					<li>400-8888-888</li>
					<li>contact@cn.*****.diandang</li>
				</ul>
			</div>
			<div class="order-list">
				<ul class="order-list-msg">
					<li class="order-list-time">
						<ol class="order-list-date">
							<li>三月</li>
							<li>26</li>
							<li>2019</li>
						</ol>
					</li>
					<li><h3>订单编号<span>#GU201903261041972</span></h3></li>
					<li class="canceled-list">订单已取消</li>
					<li class="goods-Num">数量:2</li>
					<li class="goods-total">总计：￥4，999</li>
					<li class="hide-detail">收起详情</li>
				</ul>
				<div class="cancel-list">取消订单</div>
				
				<ul class="order-content">
					<li class="order-list-pic">
						<img src="../assets/orderperson/goodslist.png" alt="" />
					</li>
					<li>
						<ol class="order-msg-list">
							<li>苹果</li>
							<li>Mac book pro</li>
							<li>2015年</li>
						</ol>
					</li>
					<li class="get-package">预计***日上门取件</li>
					<li class="goods-Num">数量:1</li>
					<li class="goods-total">￥4，999</li>
				</ul>
				<ul class="order-content">
					<li class="order-list-pic">
						<img src="../assets/orderperson/goodslist.png" alt="" />
					</li>
					<li>
						<ol class="order-msg-list">
							<li>苹果</li>
							<li>Mac book pro</li>
							<li>2015年</li>
						</ol>
					</li>
					<li class="get-package">预计***日上门取件</li>
					<li class="goods-Num">数量:1</li>
					<li class="goods-total">￥4，999</li>
				</ul>
				<ul class="order-list-total">
				
					<li class="goods-allNum">运费<span>免费</span></li>
					<li class="goods-allTotal">总计<span>￥4，999</span></li>
				</ul>
				<ul class="order-address">
				
					<li class="get-address">取货地址</li>
					<li class="user-msg"><dl>
						<dt class="user-name">刘**</dt>
						<dd class="user-address">北京市昌平区北京职业科技学院</dd>
						<dd class="user-phone">+86 1774771****</dd>
					</dl></li>
					<li class="ems-way"><dl>
						
						<dt class="normal-ems">普通快递</dt>
						<dd class="ems-price">免费</dd>
					</dl></li>
				</ul>
				
			</div>
</div>
<pageBottom></pageBottom>
</div>

</template>


<script>
import pageTop from    '@/components/currency/page-top.vue'
import pageBottom from '@/components/currency/page-bottom.vue'

export default {
  name:"orderperson",
  components :{
    pageTop,
    pageBottom,
   
  }
}
</script>






<style lang="scss" scoped>
 #page_top{
    background:url("../assets/coupon/orderpersontop.png") ;
 }
 * {
    padding: 0;
    margin: 0;
}

#content {
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding-bottom:113px;
    background: rgba(231, 231, 231, 1);
    opacity: 1;
    .order-title {
        margin:0 auto;
        width: 1200px;
        height: 204px;
        overflow: hidden;
        .order-num {
            float:left;
            padding-top: 91px;
            width: 203px;
            height: 45px;
            font-size: 34px;
            line-height: 45px;
            color: rgba(0, 0, 0, 1); 
            display: inline-block;
            margin-right: 13px;
        }
        .order-contact {
            overflow: hidden;
            padding-top: 108px;
            list-style: none;
            float: right;
            li {
                float: left;
                height: 20px;
                font-size: 15px;               
                line-height: 20px;
                color: rgba(135, 135, 135, 1);
                line-height: 18px;
            }
            li:first-of-type {
                width: 101px;
                height: 18px;
                padding-right: 17px;
                border-right: 1px solid rgba(112, 112, 112, 1);
            }
            li:last-of-type {
                padding-left: 46px;
                width: 195px;
            }
        }
    }
    .order-list {
       
        width: 1200px;
        margin: 0 auto;
        height: 860px;
        background: rgba(255, 255, 255, 1);
        opacity: 1;
        .order-list-msg {
            padding-top: 19px;
            height: 0px;
            border-bottom: 1px solid rgba(112, 112, 112, 1);
            height: 140px;
            list-style: none;
            li:nth-of-type(2),
            li:nth-of-type(3),
            li:nth-of-type(4),
            li:nth-of-type(5),
            li:nth-of-type(6) {
                float: left;
            }
            .order-list-time {
                float: left;
            }
            li:nth-of-type(2) h3 {
                padding: 50px 0 47px 42px;
                width: 285px;
                height: 24px;
                font-size: 18px;
                line-height: 24px;
                color: rgba(0, 0, 0, 1);
                span {
                    display: inline-block;
                    margin-left: 16px;
                }
            }
            .canceled-list {
                padding: 50px 0 47px 60px;
                width: 80px;
                height: 21px;
                font-size: 16px;
                line-height: 21px;
                color: rgba(135, 135, 135, 1);
            }
            .goods-Num {
                padding: 50px 0 47px 174px;
                width: 40px;
                font-size: 14px;
            }
            .goods-total {
                padding: 50px 0 47px 115px;
                width: 103px;
                font-size: 14px;
            }
            .hide-detail {
                padding: 50px 50px 47px 51px;
                width: 56px;
                font-size: 14px;
            }
            .order-list-date {
                width: 143px;
                list-style: none;
                height: 121px;
                border-right: 1px solid rgba(112, 112, 112, 1);
                li:first-of-type {
                    margin-left: 59px;
                    width: 28px;
                    font-size: 14px;
                }
                li:nth-of-type(2) {
                    padding-bottom: 14px;
                    margin-left: 52px;
                    width: 40px;
                    height: 45px;
                    font-size: 34px;
                    line-height: 45px;
                    border-bottom: 1px solid rgba(112, 112, 112, 1);
                }
                li:last-of-type {
                    margin: 13px 0 0 55px;
                    width: 33px;
                    font-size: 14px;
                }
            }
        }
        .cancel-list {
            padding: 18px 0 20px 44px;
            width: 1157px;
            text-align: left;    
            font-size: 14px;
            border-bottom: 1px solid rgba(112, 112, 112, 1);
        }
    }
    .order-content {
        border-bottom: 1px solid rgba(112, 112, 112, 1);
        height: 160px;
        list-style: none;
        li {
            float: left;
            .order-msg-list {
                list-style: none;
                li {
                    float: none;
                }
                li:first-of-type {
                    margin: 32px 0 7px 0;
                    height: 24px;
                    font-size: 18px;
                    line-height: 24px;
                }
                li:nth-of-type(2),
                li:last-of-type {
                    width: 95px;
                    font-size: 14px;
                    color: rgba(135, 135, 135, 1);
                }
            }
        }
        .order-list-pic {
            margin: 4px 18px 2px 46px;
        }
        .get-package {
            margin: 38px 0 0 210px;
            width: 118px;
            font-size: 14px;
            color: rgba(135, 135, 135, 1);
        }
        .goods-Num {
            margin: 38px 0 0 152px;
            width: 40px;
            font-size: 14px;
        }
        .goods-total {
            list-style: none;
            margin: 38px 0 0 157px;
            width: 61px;
            font-size: 14px;
    }
 
}
   .order-list-total {
        border-bottom: 1px solid rgba(112, 112, 112, 1);
        list-style: none;
        height:176px;
        .goods-allNum {
            width: 250px;
            margin: 86px 0 0 823px;
            height: 19px;
            font-size: 14px;
            font-weight: 400;
            line-height: 19px;
            span {
                display: inline-block;
                float: right;
            }
        }
        .goods-allTotal {
            margin: 16px 0 0 823px;
            width: 250px;
            height: 19px;
            font-size: 14px;
            font-weight: 400;
            line-height: 19px;
            span {
                display: inline-block;
                float: right;
            }
        }
    }
    .order-address {
        margin:31px;
        list-style: none;
        li{
          float:left; 
        }
        .get-address{  
          height:24px;
          font-size:18px;
          font-weight:400;
          line-height:24px;
          color:rgba(27,27,27,1);
        }
        .user-msg{
            margin:4px 0 0 78px;
            .user-name{
                width:27px;
                font-size:14px;
                color:rgba(27,27,27,1);
            }
            dd{
                margin-top:6px;
                width:196px;
                font-size:14px;
                color:rgba(135,135,135,1);
            }
        }
        .ems-way{
            margin-left:93px;
         
            .normal-ems{
                margin-top:4px; 
                width:56px;
            font-size:14px;
            color:rgba(27,27,27,1);
            }
            dd{
              
                width:28px;
font-size:14px;
color:rgba(135,135,135,1);
            }
        }
    }
}
</style>