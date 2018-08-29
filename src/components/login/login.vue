<template>
<!--新内容-->
<div class="login_center">
  <div class="login-box">
    <div class="login_center_right">
      <div class="login_center_right_main">
        <div class="login-group">
          <div class="login-group-head">
            <span class="active">账号登录</span>
            <em></em>
            <span>验证码登录</span>
          </div>
          <div class="login-tab-content">
            <div class="login-tab-panel active">
              <ul class="login-row">
                <li>
                  <input type="text" id="email_address_login" name="email_address_login" @focus="name_check.status=false" class="register_main_form_input" placeholder="请输入手机号/邮箱" v-model="login_name">
                  <b class="FiberStore_login_validate_alert" v-if="name_check.status">{{name_check.text}}</b>
                </li>
                <li>
                  <input type="password" id="password_login" name="password_login" @focus="password_check.status=false" class="register_main_form_input" placeholder="请输入密码" v-model="password">
                  <span class="psw-eyes"></span>
                  <b class="FiberStore_login_validate_alert" v-if="password_check.status">{{password_check.text}}</b>
                </li>
              </ul>
              <div class="login-link">
                <div class="login-check">
                  <label for="autoLogin">
                    <span class="checkbox-red active">
                      <input type="checkbox" id="autoLogin" checked>
                    </span>
                    30天内自动登录
                  </label>
                </div>
                <div class="login-linkpanel">
                  <router-link to="/passwordforgotten">忘记密码?</router-link>
                  <a href="">立即注册</a>
                </div>
              </div>
              <input class="register_main_rightnow login_now" type="submit" id="user_login" value="立即登录" @click="checklogin()">
              <!--游客登录，隐藏-->
              <div class="login-tourist-btn" v-if="touristbtn">
                <input class="tourist-regist-btn" type="button" value="以游客身份购买">
              </div>
            </div>

            <div class="login-tab-panel">
              <ul class="login-row">
                <li>
                  <input type="text" id="verify_tel" name="verify_tel" class="register_main_form_input" placeholder="请输入手机号码" value=''>
                  <b class="FiberStore_login_validate_alert"></b>
                </li>
                <li>
                  <input type="text" id="verify_code" name="verify_code" class="register_main_form_input" placeholder="请输入验证码" value="">
                  <input type="button" class="get-code" value="获取验证码" id="loginGetcode"/>
                  <b class="FiberStore_login_validate_alert"></b>
                </li>
              </ul>
              <div class="login-link">
                <div class="login-check">
                  <label for="autoTelLogin">
                    <span class="checkbox-red active">
                      <input type="checkbox" id="autoTelLogin" checked>
                    </span>
                    30天内自动登录
                  </label>
                </div>
                <div class="login-linkpanel">
                  <router-link to="/passwordforgotten">忘记密码?</router-link>
                  <a href="">立即注册</a>
                </div>
              </div>
              <input class="register_main_rightnow login_now" type="submit" id="verify_login" value="立即登录" onclick="">
            </div>

          </div>
        </div>

        <div class="login_center_right_other">
          <div class="login-divide">
            <p>其他方式登录</p>
          </div>
          <div class="login_icon">
            <a href="" class="login_wx" title="微信登录"><em></em></a>
            <a href="" class="login_zfb" title="支付宝登录"><em></em></a>
            <a href="" onclick='toLogin()' class="login_qq" title="QQ登录"><em></em></a>
            <a href="" class="login_wb" title="微博登录"><em></em></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import $ from 'jquery'
// import {checkisEmail, checkisMobilemainland, checkisMobilehk, checkisInt, checkisName} from '../../js/common_reg.js'
import {checkisEmail} from '../../js/common_reg.js'
export default {
  name: 'Login',
  data () {
    return {
      touristbtn: false,
      login_name: '',
      name_check: {
        status: false,
        text: '您的邮箱格式不正确'
      },
      password: '',
      password_check: {
        status: false,
        text: '您的密码不正确'
      }
    }
  },
  methods: {
    checklogin () {
      var name = this.login_name
      var password = this.password
      if (!checkisEmail(name)) {
        this.name_check.status = true
      }
      if (password.length <= 6) {
        this.password_check.status = true
      }
    }
  }
}
// 选项卡切换
$(document).on('click', '.login-group-head span', function () {
  var num = $('.login-group-head span').index(this)
  var content = $('.login-tab-content .login-tab-panel')
  content.eq(num).addClass('active').siblings().removeClass('active')
  $(this).addClass('active').siblings('span').removeClass('active')
})
</script>
<style>

</style>
