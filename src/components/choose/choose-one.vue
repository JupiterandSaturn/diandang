<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="使用情况" prop="regionone">
            <el-select v-model="ruleForm.regionone" placeholder="请选择活动区域">
                <el-option label="全新包装未拆封" value="1"></el-option>
                <el-option label="正常进入桌面" value="0.9"></el-option>
                <el-option label="无法开机" value="0.8"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="储存容量" prop="regiontwo">
            <el-select v-model="ruleForm.regiontwo" placeholder="请选择活动区域">
                <el-option label="64G" value="1"></el-option>
                <el-option label="256G" value="0.9"></el-option>
                <el-option label="512G" value="0.8"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="购买渠道" prop="regionthree">
            <el-select v-model="ruleForm.regionthree" placeholder="请选择活动区域">
                <el-option label="大陆国行" value="1"></el-option>
                <el-option label="香港行货" value="0.9"></el-option>
                <el-option label="展示机" value="0.8"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="机身颜色" prop="regionfour">
            <el-select v-model="ruleForm.regionfour" placeholder="请选择活动区域">
                <el-option label="金色" value="1"></el-option>
                <el-option label="灰色" value="0.9"></el-option>
                <el-option label="银色" value="0.8"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="国内保修" prop="regionfive">
            <el-select v-model="ruleForm.regionfive" placeholder="请选择活动区域">
                <el-option label="保修期剩余一个月以上" value="1"></el-option>
                <el-option label="过保/保修期不足一个月" value="0.9"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="屏幕外观" prop="regionsix">
            <el-select v-model="ruleForm.regionsix" placeholder="请选择活动区域">
                <el-option label="很少使用，完美无任何划痕" value="1"></el-option>
                <el-option label="经常使用，完好有轻微划痕" value="0.9"></el-option>
                <el-option label="经常使用，屏幕有明显划痕/脱胶" value="0.8"></el-option>
                <el-option label="屏幕有缺角/碎裂" value="0.7"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="屏幕显示" prop="regionseven">
            <el-select v-model="ruleForm.regionseven" placeholder="请选择活动区域">
                <el-option label="很少使用，显示完美基本全新" value="1"></el-option>
                <el-option label="经常使用，显示正常细微色差" value="0.9"></el-option>
                <el-option label="显示异常，屏幕有轻微老化" value="0.8"></el-option>
                <el-option label="屏幕无法正常显示" value="0.7"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="维修情况" prop="regioneight">
            <el-select v-model="ruleForm.regioneight" placeholder="请选择活动区域">
                <el-option label="无维修情况" value="1"></el-option>
                <el-option label="屏幕维修" value="0.9"></el-option>
                <el-option label="主板维修" value="0.8"></el-option>
                <el-option label="屏幕和主板均有维修" value="0.7"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm');$router.push('/Evaluation')">估价</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    regionone: '',
                    regiontwo: '',
                    regionthree: '',
                    regionfour: '',
                    regionfive: '',
                    regionsix: '',
                    regionseven: '',
                    regioneight: '',
                },
                rules: {
                    regionone: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    regiontwo: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    regionthree: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    regionfour: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    regionfive: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    regionsix: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    regionseven: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    regioneight: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ]

                }
            };
        },
        computed:{
            percent:function () {
                return this.ruleForm.regionone*this.ruleForm.regiontwo*this.ruleForm.regionthree
                    * this.ruleForm.regionfour *this.ruleForm.regionfive*this.ruleForm.regionsix
                    *this.ruleForm.regionseven*this.ruleForm.regioneight
            },
            brandId:function(){
                return this.$store.state.ConfigurationSelection.truemodel.brandId
            },
            model:function(){
                return this.$store.state.ConfigurationSelection.truemodel.model
            },
            peakPrice:function () {
                return this.$store.state.ConfigurationSelection.truemodel.peakPrice
            },
            productsAddress:function () {
                return this.$store.state.ConfigurationSelection.truemodel.productsAddress
            },
            pageView:function () {
                return this.$store.state.ConfigurationSelection.truemodel.pageView
            },
            releaseTime:function () {
                return this.$store.state.ConfigurationSelection.truemodel.releaseTime
            },
            creationTime:function () {
                return this.$store.state.ConfigurationSelection.truemodel.creationTime
            },
            proId:function () {
                return this.$store.state.ConfigurationSelection.truemodel.proId
            }
        },

        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$store.dispatch("setTitle",{
                            peakPrice:this.peakPrice,
                            brandId:this.brandId,
                            model:this.model,
                            percent:this.percent,
                            productsAddress:this.productsAddress,
                            pageView:this.pageView,
                            releaseTime:this.releaseTime,
                            creationTime:this.creationTime,
                            proId:this.proId
                        });
                        console.log("submit");
                        console.log(this.percent);
                        console.log(this.$store.state.ConfigurationSelection.truemodel.peakPrice);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            // pushnext(){}
        }
    }

</script>

<style lang="sass">

</style>