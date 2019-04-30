<template>
  <div id="register">
    <div class="content-create">
      <ul>
        <li>没有账号？</li>
        <li>拥有***账号您将获得一下权利：</li>
        <li>新用户优惠券</li>
        <li>个性化推荐内容</li>
        <li>订单追踪</li>
        <el-button class="create-user" type="button" @click="dialogVisible = true">创建账户</el-button>
      </ul>
    </div>
    <el-dialog title="创建您的账户" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户账号" prop="age">
          <el-input placeholder="请输入用户账号" v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input placeholder="请输入验证码" v-model="ruleForm.captcha"></el-input>
          <div>
            <img class="testPic" :src="cap">
          </div>
          <span @click="testNum(true)">换一个</span>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input placeholder="手机号码" v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="至少6个字符含数字大小写字母"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
            placeholder="确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item label prop="type">
          <el-checkbox label="创建账号代表您已接收*****的隐私政策" name="type" :style="{float:flo}"></el-checkbox>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm()"
            :style="{background:back,margin:'0px 50px 0 0 '}"
          >创建账户</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "register",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };

    return {
      back: "gray",
      font: "white",
      fonts: 10,
      wid: 217,
      mar: 10,
      hei: 42,
      flor: "right",
      flo: "left",
      cap: "http://39.97.42.25:8080/pawn/captcha.jpg", //require("http://39.97.42.25:8080/pawn/captcha.jpg"),

      ruleForm: {
        userName: "",
        captcha: "",
        mobile: "",
        password: "",
        checkPass: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },

      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("您确定要取消注册？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    submitForm() {
      // this.$refs[formName].validate(valid => {
       
      //   if (valid) {
      //       this.$router.push({path:'login')};
       
      //   } else {
      //     alert("error submit!!");
      //     return false;
      //   }
      // });
      this.$store.dispatch("userRegister", {
        data: {
          username: this.ruleForm.userName,
          password: this.ruleForm.password,
          captcha: this.ruleForm.captcha,
          mobile: this.ruleForm.mobile
        }
      });
        //  return this.$router.push('/login')
    },

    testNum() {
      // console.log(1111111111);
      this.cap = "http://39.97.42.25:8080/pawn/captcha.jpg?" + Date.now();
    }
  },

  components: {}
};
</script>

<style lang="scss">
.content-create {
  width: 340px;
  float: right;
  ul {
    float: left;
    margin-top: 70px;
    li:first-of-type {
      width: 110px;
      height: 29px;
      font-size: 22px;

      font-weight: 400;
      line-height: 29px;
      color: rgba(75, 75, 75, 1);
      opacity: 1;
    }
    li:nth-of-type(2) {
      margin-top: 32px;
      width: 202px;
      height: 19px;
      font-size: 14px;

      font-weight: 400;
      line-height: 19px;
      color: rgba(27, 27, 27, 1);
      opacity: 1;
    }
    li:nth-of-type(3),
    li:nth-of-type(4),
    li:nth-of-type(5) {
      list-style: disc;
      width: 100px;
      text-align: left;
      height: 19px;
      font-size: 14px;
      margin-top: 17px;
      font-weight: 400;
      line-height: 19px;
      color: rgba(75, 75, 75, 1);
      opacity: 1;
    }
  }
  .create-user {
    margin-top: 56px;
    width: 272px;
    height: 46px;
    border: 1px solid rgba(27, 27, 27, 1);
    opacity: 1;
  }
  .create-user:hover {
    color: black;
  }
}
</style>
