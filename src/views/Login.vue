<template>
  <div class="bg-image">
    <div class="login-container" >
      <!-- <img :src="Logo" alt="logo"> -->
      <h2>Login</h2>
        <el-form
          :model="state.loginDetails"
          status-icon
          :rules="loginFormRules"
          ref="loginFormRef"
          class="demo-ruleForm"
        >
          <el-form-item label="account" prop="account">
            <el-input v-model="state.loginDetails.account" clearable/>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="state.loginDetails.password" type="password" clearable/>
          </el-form-item>

          <el-form-item class="my-9">
            <el-button
              type="primary"
              :disabled="!isValidForm"
              @click="handleLogin"
            >
              登入
            </el-button
            >
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>


<script setup>
// import Logo from '@/assets/logo.png'
import { ref, reactive, watch, nextTick } from 'vue';
// import axios from 'axios'

const loginFormRef = ref();
const isValidForm  = ref(true);
const isSubmitted = ref(false);
const state = reactive({
  loginDetails: {
    account: '',
    password: '',
    token: '',
  }
});

const loginFormRules = {
  account: [{ required: true, trigger: 'change' }],
  password: [{ required: true, trigger: 'change' }],
};

watch(state, () => {
  if (!isSubmitted.value) return;
  validateForm();
})

const validateForm  = () => {
  loginFormRef.value.validate((result) => (isValidForm.value = result))
}

const handleLogin = () => {
  isSubmitted.value = true;
  validateForm();
  if (isValidForm.value == true) {
    // state.loginDetails.token = 'test324uhiuihdfd'
    // const { account, password } = state.loginDetails
    // const param = {
    //   account,
    //   pwd: password,
    // }
  }
}
</script>

<style lang="scss" scoped>
.bg-image{
  // background-image: url('../assets/login_bg.jpg');
  height: 100vh;
  position: fixed;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-container {
    width: 600px;
    background: #fff;
    border: 1px solid #d3d3d3;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 12px 12px 7px rgba(0, 0, 0, 0.6);
    .el-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}

.el-form-item {
  width: 70%;
  flex-direction: column;
  margin-bottom: 12px;
  :deep(.el-form-item__label) {
    justify-content: flex-start;
    color: #000;
  }
  :deep(.el-input__wrapper) {
    border-radius: 20px;
    padding: 1px 20px;
  }
  :deep(.el-form-item__error) {
    // color: red;
    padding-left: 10px;
  }
  .el-button {
    width: 100%;
    height: 40px;
    border-radius: 50px;
  }
}


</style>
