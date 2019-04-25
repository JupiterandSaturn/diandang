<template>
    <div id="coupon">
        <pageTop></pageTop>
        <div id="content">
            <div id="content_center">
                <div id="content_center_left">
                    <div id="con_cen_left_top">
                        <p>手机号码</p>
                        <p>我们将通过以下手机号码向您发送订单相关信息</p>
                        <p>138****</p>
                    </div>
                    <p>
                        <span>1</span>
                        <span>取货地址</span>
                    </p>
                    <div id="form_radio_one">
            
                        <el-radio v-model="radio" label="1" class="radio1">
                            <span>&nbsp;&nbsp;山峰&nbsp;&nbsp;&nbsp;先生</span>
                        </el-radio>
                        
                            
                        <a href="#">编辑</a>
                        <p>北京市铲平去啊的风口浪尖案例是哈斯夺冠发</p>
                        <p>134847810274</p>
                        <p>默认地址</p>
                        <br>
                        <el-radio v-model="radio" label="2" >添加新地址</el-radio>
                        <br>
                        <h5>取件方式</h5>
                        <el-radio v-model="take_part" label="0">
                            <span>&nbsp;&nbsp;顺丰快递</span>
                        </el-radio>
                        <br><br>
                        <h5>顺丰上门取件，全国25元以内包邮</h5>
                        <p>
                            <span>2</span>
                            <span>优惠券</span>
                        </p>
                        <el-radio v-model="radio_coupon" label="1" >
                            <span>暂无优惠券</span>
                        </el-radio>
                        <br><br><br><br>
                        <el-radio v-model="radio_coupon" label="2" >使用优惠券</el-radio>
                        
                    </div>
                    
                </div>
                <div id="content_center_right">
                    <div id="con_cen_rig_top">
                        <div>
                            <span v-model="number_of_packages">{{number_of_packages}}</span>
                            <span>件商品</span>
                        </div>
                        <hr>
                        <div>
                            <img :src="img"/>
                            <p>苹果Mac&nbsp;Pro&nbsp;2015款</p>
                            <span>数量:</span>
                            <!-- 由于成色差异各不相同，暂定为每个物品数量锁死为1.
                            如，两台IP5,成色可能不一样，定价也不一样，所以不能按照ip5：2台来走。
                            只能定为，IP5:1,IP5:1。这样。每台成色不一样，价格也不一样 -->
                            <span >1</span>
                            <p>
                                <span>￥</span>
                                <span v-model="money">{{money}}</span>
                            </p>
                        </div>
                        <hr>
                        <div>
                            <ul>
                                <li>
                                    <p>
                                        <!-- 这里是暂时数据。
                                        需要修改为本窗口内所有商品之和 -->
                                        <span>商品总计</span>
                                        <span>{{money}}</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <span>运费</span>
                                        <span v-model="freight">{{freight}}</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <!-- 这里是暂时数据。
                                        需要修改为本窗口内所有商品之和+运费 -->
                                        <span>总计</span>
                                        <span>{{money}}</span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <hr>
                        <el-checkbox v-model="checked">
                            <span>提交订单表示同意《用户协议》及《隐私政策》</span>
                        </el-checkbox>
                        <br>
                        <button>提交订单</button>
                    </div>
                </div>

            </div>
        </div>
        <pageBottom></pageBottom>
    </div>

</template>


<script>
    import pageTop from    '@/components/currency/page-top-min.vue'
    import pageBottom from '@/components/currency/page-bottom.vue'
    

    export default {
        name:"coupon",
        data () {
            return {
                col:'black',
                radio: '1',
                take_part:"0",
                radio_coupon:"1",
                number_of_packages:"2",
                img:"../assets/page-top/cart.png",
                money:"2510",
                freight:"免费",
                checked: true,
            };
           
        },
        
        components :{
            pageTop,
            pageBottom,
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
        #content_center {
            @include widhei(null, 1000px);
            margin: 18px;
            background: #e7e7e7;
            overflow: hidden;
            #content_center_left{
                float:left;
                width:64.16%;
                /*height:98px;*/
                overflow: hidden;
                margin:25px 0 0 18px;
                background:#f0f;
                //content_center_left con_cen_left
                #con_cen_left_top{
                    @include widhei(null,10%);

                    /*margin:25px 0 0 18px;*/
                    padding:14px 0 18px 24px;
                    background: #ffffff;
                    &>p{
                        overflow: hidden;
                        text-align: left;
                        font-size:14px;
                        line-height:19px;
                        &:first-of-type{
                            padding-bottom:6px;
                        }
                        &:last-of-type{
                            padding-top:3px;
                        }
                    }
                }
                &>p{
                    &:first-of-type{
                        /*float:left;*/
                        text-align: left;
                        margin-top:39px;
                        padding-left:8px;
                        overflow:hidden;
                        span{
                            float:left;
                            &:first-of-type{
                                height:42px;
                                margin-top:4px;
                                display: block;
                                @include widhei(34px,34px);
                                -webkit-border-radius: 50%;
                                -moz-border-radius: 50%;
                                border-radius: 50%;
                                border:1px solid #000000;
                                @include fontSizCol(14px,null,34px);
                            }
                            &:nth-of-type(2){
                                @include fontSizCol(32px,null,null);
                                line-height:42px;
                                padding-left:22px;
                            }
                        }
                    }
                }
                #form_radio_one{
                    margin-top:42px;
                    float:left;
                    
                    label{
                        float:left;
                        text-align:left;
                        &:nth-of-type(2){
                            padding-top:20px;
                        }
                        
                    }
                    
                    a{
                        padding-left:240px;
                    }
                    p{
                        text-align:left;
                        padding-left:32px;
                        &:first-of-type{
                            padding-top:6px;
                        }
                        padding-top:23px;
                    }
                    h5{
                        display:block;
                        text-align:left;
                        &:first-of-type{
                            padding-top:46px;
                            font-size:14px;
                            font-weight:normal;
                        }
                    }
                    label:nth-of-type(3){
                        margin-top:13px;
                    }
                    h5:nth-of-type(2){
                        padding-top:10px;
                    }
                    p:nth-of-type(4){
                        /*float:left;*/
                        text-align: left;
                        margin-top:15px;
                        padding-left:8px;
                        overflow:hidden;
                        span{
                            float:left;
                            &:first-of-type{
                                height:42px;
                                margin-top:4px;
                                display: block;
                                @include widhei(34px,34px);
                                -webkit-border-radius: 50%;
                                -moz-border-radius: 50%;
                                border-radius: 50%;
                                border:1px solid #000000;
                                @include fontSizCol(14px,null,34px);
                            }
                            &:nth-of-type(2){
                                @include fontSizCol(32px,null,null);
                                line-height:42px;
                                padding-left:22px;
                            }
                        }
                    }
                    label{
                        &:nth-of-type(4){
                            margin-top:40px;
                        }
                        
                        &:nth-of-type(5){
                            margin-top:20px;
                        }
                    }

                }
            }
            #content_center_right{
                @include widhei(380px,876px);
                background:#fff;
                float:right;
                margin:25px 25px 0 0;
                #con_cen_rig_top{
                    height:538px;
                    div:first-of-type{
                        padding:30px 0;
                        span{
                            font-size:14px;
                            padding-left:12px;
                            &:first-of-type{
                                &:before{
                                    content:url("../assets/page-top/cart.png");
                                    color:#000;
                                    margin-right:12px;
                                }
                            }

                        }
                    }
                    hr{
                        width:338px;
                        height:0px;
                        border:1px solid rgba(112,112,112,1);
                    }
                    div:nth-of-type(2){

                    }
                    div:nth-of-type(3){
                        overflow:hidden;
                        margin-top:24px;
                        ul{
                            width:338px;
                            li{
                                width:100%;
                                p{
                                    overflow:hidden;
                                    padding-bottom:14px;
                                    width:100%;
                                    span{
                                        &:first-of-type{
                                            float:left;
                                        }
                                        
                                        &:nth-of-type(2){
                                            float:right;
                                        }
                                    }
                                    &:last-of-type{
                                        padding-bottom:40px;
                                    }
                                }
                            }
                        }
                    }
                    &>label{
                        width:338px;
                    }
                    button{
                        @include widhei(338px,46px);
                        background:#000;
                        color:#E5DFD9;
                        font-size:14px;
                        border:none;
                    }
                }
                
            }

        }
    }
    

</style>