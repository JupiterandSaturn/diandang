<template>
    <div id="middle">
        <div id="middle_top">
            <div class="middle_img">
                <img src="../../../public/images/imgPersonal/messimg1.jpg" @click="handleRouterOrder">
            </div>
            <div class="middle_content">
                <p>我的订单<span>></span></p>
                <b>管理和编辑您的订单</b>
            </div>
        </div>
        <div id="middle_bottom">
            <div class="message">
                <ul>
                    <li @click="handleRouterMymessage">
                        <p>我的信息</p>
                        <b>管理您的个人信息</b>
                    </li>
                    <li @click="handleRouterMyaccount">
                        <p>我的账户</p>
                        <b>管理您的账户信息</b>
                    </li>
                    <li class="massage_linone" style="border:none;" @click="handleRouterMycoupon">
                        <p>我的信息</p>
                        <b>管理您的卡券信息</b>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"perMiddle",
    methods:{
        handleRouterOrder(){
            this.$router.push({path:'/orderperson'})
        },
        handleRouterMymessage(){
            this.$router.push({path:'/orderInformation'})
        },
        handleRouterMyaccount(){
            this.$router.push({path:'/Account'})
        },
        handleRouterMycoupon(){
            this.$router.push({path:'/coupon'})
        }
    }
}
</script>

<style lang="scss">
    #middle{
        width:100%;
        height:919px;
        padding:18px 0;
    }
    #middle_top{
        width:1200px;
        height:526px;
        margin:0 auto;
        text-align:center;
        background:#E7E7E7;
        border-bottom:1px solid #fff;
        padding-top:136px;
        .middle_img{
            width:256px;//289px
            height:256px;
            border-radius: 50%;
            border:1px solid #999;
            margin:0 auto;
            img{
                width:100%;
                height:100%;
            }
        }
        .middle_content{
            p{
                margin-top:17px;
                font-size:32px;
                color:#1B1B1B;
                span{
                    margin-left:3px;
                }
            }
            b{
                display:block;
                margin-top:12px;
                font-weight: 500;
                font-size:14px;
                color:#1B1B1B;
            }
        }
    }
    #middle_bottom{
        width:1200px;
        height:263px;
        margin:0 auto;
        background:#E7E7E7;
        .message{
            width:100%;
            height:100%;
            ul{
                width:100%;
                height:100%;
                li{
                    width:33%;
                    height:100%;
                    float: left;
                    text-align: center;
                    border-right:1px solid #fff;
                    p{
                        margin-top:65px;
                        font-size:22px;
                        color:#1B1B1B;
                    }
                    b{
                        display:block;
                        font-weight: 500;
                        margin-top:20px;
                        font-size:16px;
                        color:#1B1B1B;
                    }
                }
            }
        }
    }
</style>
