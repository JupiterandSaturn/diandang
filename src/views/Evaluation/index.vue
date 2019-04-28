<template>
    <div id="evaluation">
        <Head/>
        <div class="E_banner">
            <div class="E_banner1">
                <div class="firstName">
                    <p>手机典当<span>三星</span></p>
                </div>
                <div class="E_banner2">
                    <div class="bannerLeft">
                        <div class="imgBox">
                            <img :src="imgUrl" alt="">
                        </div>
                    </div>
                    <div class="bannerRight">
                        <div class="bannerRightShow">
                            <h1>三星 Galaxy S8+</h1>
                            <h2>￥ 4，999</h2>
                            <ul>
                                <li><span></span>价格公道</li>
                                <li><span></span>服务快捷</li>
                                <li><span></span>隐私保护</li>
                                <li><span></span>快速放款</li>
                            </ul>
                            <h3>立刻换钱</h3>
                            <h4>加入回收车</h4>
                            <h5>咨询电话 400.###.###</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Foot/>
    </div>
</template>

<script>
    import Head from '@/components/currency/page-top-min.vue'

    import Foot from '@/components/currency/page-bottom.vue'

    export default {
        name: 'evaluation',
        data(){
          return{
             imgUrl:require("../../assets/Evaluation/shop@2x.png"),
          }
        },
        components: {
            Head,


            Foot
        }
    }
</script>

<style lang="scss">
    *{
        margin:0;
        padding:0;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style:none;
    }
    .E_banner{
        width: 100%;
        .E_banner1{
            height: 838px;
            background:#E3E3E3;
            margin: 18px;
            .firstName{
                height: 50px;
                overflow: hidden;
                p{
                    height:44px;
                    width:163px;
                    background: #fff;
                    margin-left:7px;
                    margin-top:6px;
                    color: #000;
                    font-family:"Microsoft YaHei";
                    font-size:14px;
                    font-weight: 400;
                    line-height: 44px;
                    text-align: center;
                    span{
                        border-left: 1px solid #707070;
                        padding-left: 18px;
                        margin-left:19px;
                    }
                }
            }
            .E_banner2{
                width: 1200px;
                margin: 0 auto;
                .bannerLeft{
                    float: left;
                    margin-top:54px;
                    border:1px dashed #000;
                    .imgBox{
                        height:574px;
                        width: 476px;
                        margin: 0 auto;
                        img{
                            height:574px;
                            width: 476px;
                        }
                    }
                }
                .bannerRight{
                    height:838px;
                    float: left;
                    margin-left:300px;
                    .bannerRightShow{
                        width: 352px;
                        height:358px;
                        margin-top: 54px;
                        margin-left: 50px;
                        h1{
                            font-size:14px;
                            font-family:'Microsoft YaHei';
                            font-weight:400;
                            line-height:19px;
                            margin-bottom:23px;
                            text-align: left;
                        }
                        h2{
                            font-size:20px;
                            font-family:'Microsoft YaHei';
                            font-weight:400;
                            line-height:26px;
                            margin-bottom:24px;
                            text-align: left;
                        }
                        ul{
                            overflow: hidden;
                            border-top:1px solid #000;
                            float: none;
                            li{
                                float: left;
                                margin:12px 45px;
                                span{
                                    margin-right:13px;
                                    width: 19px;
                                    height:19px;
                                    background: #000;

                                }
                            }
                        }
                        h3{
                            height:47px;
                            width: 352px;
                            background: #000;
                            color:#fff;
                            font-size:14px;
                            font-family:'Microsoft YaHei';
                            font-weight:400;
                            line-height:47px;
                            text-align: center;
                            margin-bottom: 24px;
                        }
                        h4{
                            height:47px;
                            width: 352px;
                            background: #fff;
                            color:#000;
                            font-size:14px;
                            font-family:'Microsoft YaHei';
                            font-weight:400;
                            line-height:47px;
                            text-align: center;
                            margin-bottom: 25px;
                        }
                        h5{
                            font-size:14px;
                            font-family:'Microsoft YaHei';
                            font-weight:400;
                            line-height:19px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
</style>