<template>
    <div id="coupon">
        <pageTop></pageTop>
        <div id="content">
            <div id="content_center">
                <div id="content_center_true">


                    <el-form ref="form" :model="form" label-width="80px">
                        <div>
                            <h6>您的信息</h6>
                                <el-select v-model="form.region" placeholder="国籍" id="asd">
                                    <el-option id="asdf"
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            <el-form-item label="姓">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-form-item label="名">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>
                            <el-select v-model="form.region" placeholder="国籍" label.width="100px">
                                <el-option label="先生" value="man"></el-option>
                                <el-option label="女士" value="women"></el-option>
                            </el-select>
                        </div>


                        <el-form-item label="活动区域">

                        </el-form-item>
                        <el-form-item label="活动时间">
                            <el-col :span="11">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="即时配送">
                            <el-switch v-model="form.delivery"></el-switch>
                        </el-form-item>
                        <el-form-item label="活动性质">
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
    .el-select-dropdown__item{
        width:10px;
        background:#fff;
    }



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
                margin:80px 0 0 60px;


            }

        }
    }
#asd{
    width:100px;
    #asdf{
        width:100px;
    }
}

</style>