<template>
    <div id="dep">
        <el-button type="text" @click="dialogVisible = true">提现</el-button>

        <el-dialog
        title="余额提现"
        :visible.sync="dialogVisible"
        width="687px"
        :before-close="handleClose"
        class="dialog">
        <hr>
        <DialogContent/>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="hrefLogin">下一步</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
        </el-dialog>
    </div>
</template>

<script>
import DialogContent from '@/components/deposit/dialogContent'

export default {
    data() {
      return {
        dialogVisible: false
      };
    },
    components:{
        DialogContent
    },
    methods: {
        hrefLogin(){
            this.$router.push({path:'/home'})
        },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>

<style lang="scss">
    .dialog{
        margin:0 auto;
    }
    .el-dialog{
        height:620px;
        background:#E5DFD9;
        padding:25px 50px;
        hr{
            background:#fff;
        }
        .el-dialog__header{
            text-align:center;
            color:#1B1B1B;
            font-weight:900;
            .el-dialog__title{
                font-size:28px;
            }
        }
        .dialog-footer{
            text-align:center;
        }
    }
</style>
