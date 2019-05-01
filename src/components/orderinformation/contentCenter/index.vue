<template>
    <div id="content_center">
        <div id="content_center_top">
            <div class="top_text">
                <h5>您的信息</h5>
            </div>
            <div class="form">
                <div class="named">
                    <p>称呼</p>
                    <el-select v-model="value" clearable placeholder="请选择" class="input1">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="surname">
                    <p>姓</p>
                    <input type="text" class="surinput">
                </div>
                <div class="surname">
                    <p>名</p>
                    <input type="text" class="surinput">
                </div>
                <div class="nationality">
                  <p>国籍</p>
                  <input type="text" class="nation_input">
                </div>
                <div class="birthday">
                  <BirthTime/>
                </div>
            </div>
        </div>
        <div id="content_center_middle">
            
        </div>
        <div id="content_center_bottom">
            
        </div>
    </div>
</template>

<script>
import BirthTime from '@/components/orderinformation/birthday'

export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '先生',
        }, {
          value: '选项2',
          label: '女士',
        }],
        value: ''
      }
    },
    components:{
      BirthTime
    }
  }
</script>

<style lang="scss">
  #content_center_top{
    width:100%;
    height:390px;
    .top_text{
      float:left;
      margin-top:80px;
      margin-left:60px;
      h5{
        font-size:18px;
        color:#1B1B1B;
        font-weight:500;
      }
    }
    .form{
      margin-top:80px;
      margin-left:347px;
      float:left;
      p{
          font-size:13px;
          color:#1B1B1B;
          margin-bottom:7px;
        }
      .named{
        float:left;
        .input1{
          width:85px;
          height:46px;
          font-size:13px;
        }
      }
      .surname{
        margin-left:10px;
        float:left;
        .surinput{
          width:385px;
          height:40px;
        }
      }
      .nationality{
        float:left;
        .nation_input{
          width:404px;
          height:40px;
        }
      }
    }
  }
</style>
