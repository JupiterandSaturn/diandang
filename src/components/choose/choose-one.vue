<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动区域">
            <el-select v-model="form.regionone" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="form.regiontwo" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                <el-option label="区域三" value="haerbin"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="form.regionthree" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                <el-option label="区域三" value="haerbin"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="form.regionfour" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                <el-option label="区域三" value="haerbin"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="form.regionfive" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                <el-option label="区域三" value="haerbin"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="form.regionsix" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                <el-option label="区域三" value="haerbin"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="form.regionseven" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                <el-option label="区域三" value="haerbin"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="form.regioneight" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                <el-option label="区域三" value="haerbin"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    regionone: '',
                    regiontwo: '',
                    regionthree: '',
                    regionfour: '',
                    regionfive: '',
                    regionsix: '',
                    regionseven: '',
                    regioneight: '',

                }
            }
        },
        methods: {
            onSubmit() {
                console.log(this.form);
            }
        }
    }
</script>

<style lang="sass">

</style>