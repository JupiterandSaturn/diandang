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
                    </div>
                    <div id="con_cen_true_right">
                        <el-form ref="form" :model="form" label-width="80px">
                            <p>
                                <span>称呼</span>
                                <span>姓</span>
                                <span>名</span>
                            </p>
                            <p>
                            <el-select v-model="form.region" placeholder="称呼" style="width:85px">
                                <el-option label="先生" value="man"></el-option>
                                <el-option label="女士" value="women"></el-option>
                            </el-select>
                            <el-input v-model="form.name" style="width:384px;padding-left:11px"></el-input>
                            <el-input v-model="form.name" style="width:384px;padding-left:11px;padding-right:20px;"></el-input>
                            </p>
                            <p>
                                <span>国籍</span>
                                <span>生日</span>
                            </p>
                            <p>
                                <el-select v-model="form.region" placeholder="国籍" style="width:400px">
                                    <el-option label="先生" value="man"></el-option>
                                    <el-option label="女士" value="women"></el-option>
                                </el-select>
                                <el-col :span="11">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 466px;margin-left:11px"></el-date-picker>
                                </el-col>
                            </p>

                            <p>联系电话</p>
                            <p>
                                <el-select v-model="form.region" placeholder="+86 中国" style="width:260px">
                                    <el-option label="先生" value="man"></el-option>
                                    <el-option label="女士" value="women"></el-option>
                                </el-select>
                                <el-input v-model="form.name" style="width:600px;padding-left:10px"></el-input>
                            </p>

                            <hr>
                            <p>手机号码</p>                            <p>手机号码</p>
                            <p v-model="phoneNum">这是您的{{**phoneNum}官网手机号码</p>
                            <p>
                                <el-input v-model="form.name" style="width:302px;"></el-input>
                                <span>修改手机号码</span>|
                                <span>修改密码</span>
                            </p>
                            <p>邮箱</p>
                            <p>输入您的邮箱，即可用邮箱进行登录和找回密码</p>
                            <p>
                            <el-input v-model="form.name" style="width:302px;"></el-input>
                            </p>
                            <hr>
                            <p>
                                <span>省</span>
                                <span>市</span>
                            </p>
                            <p>
                                <el-select v-model="form.region" placeholder="省份/直辖市" style="width:260px">
                                    <el-option label="先生" value="man"></el-option>
                                    <el-option label="女士" value="women"></el-option>
                                </el-select>
                                <el-select v-model="form.region" placeholder="市" style="width:260px">
                                    <el-option label="先生" value="man"></el-option>
                                    <el-option label="女士" value="women"></el-option>
                                </el-select>
                            </p>

                            <p>
                                <span>详细信息</span>
                            </p>
                            <p>
                                <el-input v-model="form.name" style="width:302px;"></el-input>
                            </p>


                                <el-checkbox-group v-model="form.type" >
                                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                                </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="特殊资源">
                                <el-radio-group v-model="form.resource">
                                    <el-radio label="线上品牌商赞助"></el-radio>
                                    <el-radio label="线下场地免费"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item label="活动形式">
                                <el-input type="textarea" v-model="form.desc"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                                <el-button>取消</el-button>
                            </el-form-item>
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


    export default {
        name:"coupon",
        components :{
            pageTop,
            pageBottom
        },
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',

                },
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
            }
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
    /*.el-select,.el-input__inner,input,.el-input{*/
        /*float:left;*/
        /*padding:0;*/
    /*}*/
    /*.el-form-item{*/
        /*margin:0;*/
        /*padding:0;*/
        /*float:left;*/
    /*}*/
    /*.el-select-dropdown{*/

        /*.el-scrollbar:first-of-type{*/
            /*background:blue;*/


            /*.el-select-dropdown__item{*/
                /*width:85px;*/
                /*height:20px;*/
                /*background:#fff;*/
                /*color:#000;*/
                /*!*text-align:center;*!*/
                /*line-height: 20px;*/
                /*margin: 0;*/
                /*font-size:12px;*/
                /*float:none;*/
            /*}*/
        /*}*/
    /*}*/



    #content{
        @include widhei(100%,null);
        background:#fff;
        #content_center {
            @include widhei(null, 1160px);
            margin: 18px;
            background: #e7e7e7;
            overflow: hidden;
            #content_center_true{
                @include widhei(1200px,1100px);
                margin-top:80px;
                background:#f00;
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
                    background: #0077aa;
                    p{
                        text-align:left;
                        float:left;
                        width:100%;
                        padding-bottom:10px;
                        span{
                            font-size:13px;
                        }
                    }
                    p:first-of-type{
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
                        span{
                            padding-right:380px;
                        }
                    }
                    p:nth-of-type(4){
                        padding-bottom:30px;
                    }
                    p:nth-of-type(5){

                    }
                    p:nth-of-type(6){
                        padding-bottom:36px;
                    }
                    hr{
                        margin-bottom:32px;
                    }
                }



            }

        }
    }
#asd{
    /*width:100px;*/
    #asdf{
        /*width:100px;*/
    }
}

</style>