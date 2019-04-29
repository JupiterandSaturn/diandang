<template>
    <div id="coupon">
        <pageTop></pageTop>
        <div id="content">
            <div id="content_center">
                <div id="content_center_true">

                    <div id="con_cen_true_left">
                        <h6>您的信息</h6>
                        <h6>账号详情</h6>
                        <h6>您的地址</h6>
                        <!--                                                <p>{{ $store.state.OrderInformation.getProvince}}</p>-->
                    </div>
                    <div id="con_cen_true_right">
                        <el-form ref="form" :model="form" label-width="80px">
                            <p>
                                <span>称呼</span>
                                <span>姓</span>
                                <span>名</span>
                            </p>

                            <p>
                                <el-select
                                        v-model="form.sexe"
                                        placeholder="称呼"
                                        style="width:85px"
                                        popper-class="dropDown_sex">
                                    <el-option label="先生" value="man"></el-option>
                                    <el-option label="女士" value="women"></el-option>
                                </el-select>
                                <el-input v-model="form.familyName" style="width:384px;padding-left:11px"></el-input>
                                <el-input v-model="form.trueName"
                                          style="width:384px;padding-left:11px;padding-right:20px;"></el-input>
                            </p>
                            <p>
                                <span>国籍</span>
                                <span>生日</span>
                            </p>
                            <p>
                                <el-select v-model="form.nationality" placeholder="国籍"
                                           style="width:400px" popper-class="dropDown_nationality">
                                    <el-option label="中国" value="man"></el-option>
                                    <el-option label="外国" value="women"></el-option>
                                </el-select>
                                <el-col :span="11">
                                    <el-date-picker
                                            type="date" placeholder="    出生日期"
                                            v-model="form.birthday"
                                            style="width: 466px;margin-left:11px;"></el-date-picker>
                                </el-col>
                            </p>

                            <p>联系电话</p>
                            <p>
                                <el-select v-model="form.internationalAreaCode" placeholder="+86 中国"
                                           style="width:260px" popper-class="dropDown_phone">
                                    <el-option label="先生" value="man"></el-option>
                                    <el-option label="女士" value="women"></el-option>
                                </el-select>
                                <el-input v-model="form.phone" style="width:600px;padding-left:10px"></el-input>
                            </p>

                            <hr>
                            <p>手机号码</p>
                            <!--                            以下  p  第8个 -->
                            <p>这是您的*****官网手机号码</p>
                            <p>
                                <el-input v-model="form.phone" style="width:302px;"></el-input>
                                <span>号码手机修改</span>
                                <span>|</span>
                                <span>修改密码</span>
                            </p>
                            <p>邮箱</p>
                            <p>输入您的邮箱，即可用邮箱进行登录和找回密码</p>
                            <!--                          以下p  12-->
                            <p><el-input v-model="form.email" style="width:302px;"></el-input></p>
                            <hr>
                            <p>
                                <span>省</span>
                                <span>市</span>
                                <span>区</span>
                            </p>
                            <!--                           下p 14-->
                            <p>
                                <el-select v-model="form.province"
                                           placeholder="省份/直辖市"
                                           style="width:268px;margin-right:46px;"
                                           @change="$store.dispatch('City',form.province)"
                                           popper-class="dropDown_province">
                                    <el-option
                                            v-for="item in $store.state.OrderInformation.Province"
                                            :value="item.provinceid"
                                            :key=item.id
                                            :label=item.province>
                                    </el-option>
                                </el-select>
                                <el-select v-model="form.city" placeholder="市"
                                           style="width:268px;margin-right:46px;"
                                           @change="$store.dispatch('Area',form.city)"
                                           popper-class="dropDown_city110100">
                                    <el-option v-for="item in $store.state.OrderInformation.City"
                                               :value="item.cityid"
                                               :key=item.id
                                               :label=item.city></el-option>

                                </el-select>
                                <el-select v-model="form.area" placeholder="县/区"
                                           style="width:268px"
                                           popper-class="dropDown_area">
                                    <el-option v-for="item in $store.state.OrderInformation.Area"
                                               :value="item.area"
                                               :key=item.id
                                               :label=item.area></el-option>
                                </el-select>
                            </p>
                            <p>
                                <span>详细信息</span>
                            </p>
                            <p>
                                <el-input v-model="form.address1" style="width:890px;margin-left:5px;"></el-input>
                            </p>
                            <el-checkbox-group v-model="form.addr">
                                <el-checkbox label="这是我的默认地址" name="type"></el-checkbox><br>
                                <el-checkbox label="这是一个公司地址" name="type"></el-checkbox>
                            </el-checkbox-group>

                            <p>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                </el-form-item>
                            </p>
                            <!--                            此处隐私政策应该有------------------我们的隐私政策地址-------->
                            <p>点击以上按钮代表您接收我们的<a href="">隐私政策</a></p>
                        </el-form>
                    </div>
                </div>
                <div id="con_cen_middle"></div>
                <div id="con_cen_bottom"></div>
            </div>
        </div>
        <pageBottom></pageBottom>
    </div>

</template>


<script>
    import pageTop from    '@/components/currency/page-top.vue'
    import pageBottom from '@/components/currency/page-bottom.vue'
    import Vue from 'vue';

    let url = {
        url:150000
    };
    // console.log(provinceList);
    export default {
        // name:"coupon",
        components :{
            pageTop,
            pageBottom,
        },
        data() {
            return {
                form: {
                    sexe: '',
                    familyName: '',
                    trueName: '',
                    nationality: '',
                    birthday: '',
                    internationalAreaCode: '',
                    phone: '',
                    email: '',
                    province:'',
                    city:'',
                    area:'',
                    address1:'',
                    addr:'',
                },

                // phoneNum:{num:phone},
                // options: this.$store.state.OrderInformation.getProvince,
                // provinceid:"",
            }
        },
        methods:{
            onSubmit(){
                this.$store.dispatch("setOrder",this.form);
                console.log('submit!' + this.form.sexe)
            },
        },
        mounted(){
            this.$store.dispatch("Province");
        }
    }
</script>

<style lang="scss" >



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
    //下拉列表的复用属性
    @mixin dropDown($width){
        width:$width;
        height:44px;
        line-height:44px;
        background:#fff;
        color:#000;
        margin:0 auto;
        text-align:center;
        font-size:12px;
        float:none;
    }

    a{text-decoration:none;
        color: #000000;}
    *{
        margin:0 auto;
        padding:0;
    }
    li,dt,dd{

        list-style:none;
        /*float:left;*/
    }
    /*每个下拉列表宽度样式*/
    .el-input__inner{
        height:44px;
        padding-left:20px;
    }
    .el-input--suffix .el-input__inner{
        padding-left:10px
    }


    .dropDown_sex{
        width:84px;
        .el-scrollbar{
            .el-scrollbar__view{
                .el-select-dropdown__item{
                    /*width:84px;*/
                    /*height:44px;*/
                    /*text-align: center;*/
                    /*line-height:44px;*/
                    @include dropDown(84px);
                }
            }
        }
    }
    .dropDown_nationality{
        width:400px;
        .el-scrollbar{
            .el-scrollbar__view{
                .el-select-dropdown__item{
                    @include dropDown(400px);
                }
            }
        }
    }
    .dropDown_phone{
        /*width:400px;*/
        .el-scrollbar{
            .el-scrollbar__view{
                .el-select-dropdown__item{
                    @include dropDown(260px);
                }
            }
        }
    }
         .dropDown_province{
             /*width:400px;*/
             .el-scrollbar{
                 .el-scrollbar__view{
                     .el-select-dropdown__item{
                         @include dropDown(268px);
                     }
                 }
             }
         }
       .dropDown_city110100{
           /*width:400px;*/
           .el-scrollbar{
               .el-scrollbar__view{
                   .el-select-dropdown__item{
                       @include dropDown(268px);
                   }
               }
           }
       }
    .dropDown_area{
        /*width:400px;*/
        .el-scrollbar{
            .el-scrollbar__view{
                .el-select-dropdown__item{
                    @include dropDown(268px);
                }
            }
        }
    }

    /*下拉表格样式*/
    .el-select,.el-input__inner,input,.el-input{
        float:left;
        padding:0;
    }


    #content{
        @include widhei(100%,null);
        background:#fff;
        #content_center {
            @include widhei(null, 1260px);
            margin: 18px;
            background: #e7e7e7;
            overflow: hidden;
            #content_center_true{
                @include widhei(1200px,1100px);
                margin-top:80px;
                /*background:#f00;*/
                #con_cen_true_left{
                    width:200px;
                    float:left;
                    h6{
                        text-align:left;
                        padding-bottom:320px;
                        font-size:18px;
                    }
                }
                #con_cen_true_right{
                    width:900px;
                    float:right;
                    /*background: #0077aa;*/
                    p{
                        text-align:left;
                        float:left;
                        width:100%;
                        span{
                            font-size:13px;
                        }
                    }
                    p:first-of-type{
                        padding-bottom:10px;
                        span{
                            &:first-of-type{
                                padding-right:70px;
                            }
                            &:nth-of-type(2){
                                padding-right:390px;
                            }
                        }
                    }
                    p:nth-of-type(2){
                        padding-bottom:30px;
                        float:left;
                    }
                    p:nth-of-type(3){
                        padding-bottom:10px;
                        span{
                            padding-right:380px;
                        }
                    }
                    p:nth-of-type(4){
                        padding-bottom:30px;
                    }
                    p:nth-of-type(5){
                        padding-bottom:10px;
                    }
                    p:nth-of-type(6){
                        padding-bottom:36px;
                    }
                    hr{
                        margin-bottom:32px;
                        color:#fff;
                    }
                    p:nth-of-type(7){
                        padding-bottom:30px;
                    }
                    p:nth-of-type(8){
                        padding-bottom:10px;
                        color:#878787;
                    }
                    p:nth-of-type(9){
                        padding-bottom:10px;

                        span{
                            &:first-of-type{
                                padding-left:15px;
                            }
                            &:nth-of-type(2){
                                /*font-size:34px;*/
                                /*font-weight: 100;*/
                                color:#fff;
                            }
                            padding-right:24px;
                            line-height:44px;
                        }
                    }
                    p:nth-of-type(10){
                        padding-top:20px;
                        padding-bottom:30px;
                    }
                    p:nth-of-type(11){
                        padding-bottom:10px;
                        color:#878787;
                    }
                    p:nth-of-type(12){
                        padding-bottom:34px;
                    }
                    p:nth-of-type(13){
                        padding-bottom:10px;
                        span{
                            padding-right:304px;
                        }
                    }
                    p:nth-of-type(15){
                        padding-top:46px;
                        padding-bottom:10px;
                    }
                    p:nth-of-type(16){
                        padding-bottom:47px;
                    }
                    p:last-of-type{
                        font-size:12px;
                        color:#878787;
                        a{
                            font-size:12px;
                            color:#000;
                        }
                    }
                    .el-checkbox-group{
                        width:168px;
                        float:left;
                        overflow: hidden;
                        .el-checkbox{
                            font-size:16px;
                            padding-bottom:36px;
                        }
                    }
                    .el-form-item{
                        margin-bottom:10px;
                        margin-left:-80px;
                        .el-form-item__content{
                            .el-button--primary{
                                width:136px;
                                height:44px;
                                background:#b5b5b5;
                                border:none;
                                margin:0;
                            }
                        }
                    }



                }



            }

        }
    }


</style>