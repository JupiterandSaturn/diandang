<template>
    <div class="dialog_content">
        <div class="dialog_content_top">
            <div class="balance">
                可用余额
                <div class="balance_num">
                    ￥2,717
                </div>
            </div>
            <div class="money">
                金额
                <div class="money_input">
                    <input type="text" placeholder="请输入金额">
                </div>
            </div>
        </div>
        <div class="dialog_content_center">
            <div class="radio_first">
                <el-radio v-model="radio" label="2" class="el-radio">账户</el-radio>
            </div>
            <Select/>
            <div class="radio_last">
                <el-radio v-model="radio" label="1" class="el-radio">添加新地址</el-radio>
            </div>
        </div>
        <div class="dialog_content_bottom">
            <div class="bottom_surname">
                姓名
                <div class="bottom_surname_input">
                    <input type="text">
                </div>
            </div>
            <div class="bottom_card">
                银行卡号
                <div class="bottom_card_input">
                    <input type="text" placeholder="请输入卡号">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Select from '@/components/deposit/select'

export default {
    data(){
        return {
            radio: '1'
        };
    },
    components:{
        Select
    }
}
</script>

<style lang="scss">
    .dialog_content{
        margin-top:30px;
        margin-left:31px;
        .dialog_content_top{
            .balance{
                font-size:14px;
                color:#878787;
                float:left;
                margin-right:90px;
                .balance_num{
                    font-size:20px;
                    color:#1B1B1B;
                    margin-top:23px;
                }
            }
            .money{
                font-size:14px;
                color:#1B1B1B;
                .money_input{
                    margin-top:14px;
                    input{
                        width:306px;
                        height:42px;
                        font-size:12px;
                        text-indent:12px;
                    }
                }
            }
        }
        .dialog_content_center{
            margin-top:42px;
            .radio_last{
                margin-top:29px;
            }
        }
        .dialog_content_bottom{
            margin-top:18px;
            .bottom_surname{
                float:left;
                font-size:14px;
                color:#000;
                margin-right:42px;
                .bottom_surname_input{
                    margin-top:6px;
                    input{
                        width:135px;
                        height:39px;
                    }
                }
            }
            .bottom_card{
                font-size:14px;
                color:#000;
                .bottom_card_input{
                    margin-top:6px;
                    input{
                        width:304px;
                        height:39px;
                        text-indent:13px;
                    }
                }
            }
        }
    }
    
</style>
