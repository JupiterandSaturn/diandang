<template>
    <div class="select">
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            id="aa">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '银行卡'
        }, {
          value: '选项2',
          label: '支付宝'
        }],
        value: ''
      }
    }
}
</script>

<style lang="scss">
    .select{
        margin-top:20px;
        .el-select{
            width:487px;
            height:44px;
        }
    }
</style>
