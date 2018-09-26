<template>
  <div class="FiberStore_forgotpsw_box">
    <div class="FiberStore_forgotpsw_content">
      <div class="FiberStore_forgotpsw_title">重置密码</div>
      <div class="FiberStore_forgotten">
        <ul class="FiberStore_forgotten_moblie_check">
          <li>
            <p>请输入邮箱地址/手机号码:</p>
            <div class="FiberStore_forgot_validate">
              <input class="FiberStore_forgot_txt_input" type="text" id="loginEmailAddress" name="email_address" placeholder="请输入电话号码/邮箱"/>
              <i class="help_info" id="error_info"></i>
              <div class="tips" style="display:none;" id="forgotten_password">请输入正确格式的手机账号或登录邮箱</div>
              <div class="tips" style="display:none;" id="forgotten_password_phone">请输入正确的手机号/邮箱</div>
            </div>
          </li>
          <li>
            <div class="FiberStore_forgot_validate">
              <input type="text" name="dxm" id="yzm" value="" class='FiberStore_forgot_validate_input' placeholder='请输入验证码'/>
              <input type="button" name="" id="fsyzm" value="获取验证码" class='FiberStore_forgot_validate_btn' />
              <div class="tips" style="display:none;" id="yzm_alert">请输入正确的验证码</div>
            </div>
          </li>
          <li>
            <input type="submit" name="" id="submit" value="下一步" class='FiberStore_forgot_validate_sub cl-top'/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'passwordforgotten',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    var name = this.$route.name
    this.$emit('changetit', {a: '忘记密码', b: name})
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
