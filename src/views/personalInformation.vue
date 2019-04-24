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
        #content_center {
            @include widhei(null, 1260px);
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

            }
        }
    }


</style>