<template>
<!--新内容-->
<div class="login_center">
  <div class="login-box">
    <div class="login_center_right">
      <div class="login_center_right_main">
        <div class="login-group">
          <div class="login-group-head">
            <span @click="login_method = 'normal'" :class="{'active':login_method === 'normal'}">账号登录</span>
            <em></em>
            <span @click="login_method = 'special'" :class="{'active':login_method === 'special'}">验证码登录</span>
          </div>
          <div class="login-tab-content">
            <div class="login-tab-panel active" v-if="login_method === 'normal'">
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
                  <div class="fs-checkbox-de active">
                    <b><input type="checkbox" name="comfirm_afford" checked="checked"></b>
                    <span>30天自动登陆</span>
                  </div>
                </div>
                <div class="login-linkpanel">
                  <router-link to="/passwordforgotten">忘记密码?</router-link>
                  <router-link to="/regist">立即注册</router-link>
                </div>
              </div>
              <input class="register_main_rightnow login_now" type="submit" id="user_login" value="立即登录" @click="checklogin()">
              <!--游客登录，隐藏-->
              <div class="login-tourist-btn" v-if="touristbtn">
                <input class="tourist-regist-btn" type="button" value="以游客身份购买">
              </div>
            </div>

            <div class="login-tab-panel" v-if="login_method === 'special'">
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
                <div class="fs-checkbox-de active">
                  <b><input type="checkbox" name="comfirm_afford" checked="checked"></b>
                  <span>30天自动登陆</span>
                </div>
                <div class="login-linkpanel">
                  <router-link to="/passwordforgotten">忘记密码?</router-link>
                  <router-link to="/regist">立即注册</router-link>
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
      touristbtn: false, // 是否为游客
      login_name: '',
      login_method: 'normal', // 登陆方法
      name_check: {
        status: false,
        text: ''
      },
      password: '',
      password_check: {
        status: false,
        text: ''
      }
    }
  },
  methods: {
    checklogin () {
      var name = this.login_name
      var password = this.password
      var box = []
      var access = true
      if (!checkisEmail(name)) {
        this.name_check.status = true
        this.name_check.text = '您的邮箱格式不正确'
        box.push('n')
      } else {
        box.push('y')
      }
      if (password.length <= 0) {
        this.password_check.status = true
        this.password_check.text = '请填写您的密码'
        box.push('n')
      } else {
        box.push('y')
      }
      for (let index = 0; index < box.length; index++) {
        const element = box[index]
        if (element === 'n') {
          access = false
          return access
        }
      }
      if (access) {
        this.password_check.text = ''
        this.name_check.text = ''
        window.location.href = '/index'
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
$(document).on('change', '.fs-checkbox-de input[type="checkbox"]', function () {
  var $this = $(this)
  var checkstatus = $this.prop('checked')
  if (!checkstatus) {
    $this.parents('.fs-checkbox-de').removeClass('active')
  } else {
    $this.parents('.fs-checkbox-de').addClass('active')
  }
})
$(document).on('click', '.fs-checkbox-de span', function () {
  var $this = $(this)
  var fcs = $this.siblings('b').find('input[type="checkbox"]').prop('checked')
  if (!fcs) {
    $this.siblings('b').find('input[type="checkbox"]').prop('checked', true)
    $this.parent('.fs-checkbox-de').addClass('active')
  } else {
    $this.siblings('b').find('input[type="checkbox"]').prop('checked', false)
    $this.parent('.fs-checkbox-de').removeClass('active')
  }
})
// function OtherAfford () {
//   var bg = "<div class='zt_backdrop'></div>"
//   $('#fs_afford_df').show()
//   $('body').append(bg)
//   $('.fs_afford_df_btn a').off('click').on('click', function () {
//     $(this).addClass('active').siblings().removeClass('active')
//     if ($(this).hasClass('alipay')) {
//       console.log('al')
//       $('#fs_afford_df').fadeOut()
//     }
//     if ($(this).hasClass('wepay')) {
//       console.log('wp')
//       $('#fs_afford_df').fadeOut()
//     }
//   })
// }
</script>
<style>
.other-afford-link{
  margin-top: -1px;
  background: #FFFFFF;
  position: relative;
  z-index: 2;
}
.other-afford-link input{
  width: 650px;
  height: 38px;
  border: 1px solid #f7d7d8;
  background: #fdf9f8;
  outline: none;
  color: #333333;
  padding: 0 10px;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.other-afford-link input:focus{
  outline: none;
}
.other-afford-bt{
  padding-top: 20px;
  padding-bottom: 48px;
}
.other-afford-button{
  width: 178px;
  height: 40px;
  font-size: 16px;
  line-height: 38px;
  border-radius: 3px;
  background: #d63030;
  color: #FFFFFF;
  text-align: center;
  outline: none;
  border: none;
  vertical-align: middle;
  cursor: pointer;
}
.other-afford-button:hover{
  background: #C61017;
}
.other-afford-bt a{
  display: inline-block;
  margin: 0 16px;
  width: 178px;
  height: 38px;
  font-size: 14px;
  line-height: 36px;
  border-radius: 3px;
  background: #FFFFFF;
  color: #d63030;
  text-align: center;
  outline: none;
  vertical-align: middle;
  border: 1px solid #d63030;
}
.other-afford-bt a:hover{
  text-decoration: none;
}
.fs-checkbox-de{
  vertical-align: middle;
  line-height: 24px;
  /* margin-top: 26px; */
  float: left;
  cursor: pointer;
}
.fs-checkbox-de input[type="checkbox"]{
  opacity: 0;
  display: inline-block;
  vertical-align: middle;
  height: 100%;
  width: 100%;
  cursor: pointer;
}
.fs-checkbox-de b{
  display: inline-block;
  /*vertical-align: middle;*/
  height: 24px;
  width: 18px;
  margin-right: 5px;
  background: url(http://www.feisu.com/includes/templates/fiberstore/images/forum_select.png) no-repeat 0px 3px;
}
.fs-checkbox-de span{
  font-size: 14px;
  color: #666666;
}
.fs-checkbox-de.active b{
  background: url(http://www.feisu.com/includes/templates/fiberstore/images/forum_select.png) no-repeat 0px -39px;
}
.fs_afford_df {
  width: 460px;
  display: none;
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  background: #FFFFFF;
  border-radius: 3px;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  z-index: 999;
  padding-bottom: 40px;
}
.fs_afford_df>h3 {
  background: #F5F5F5;
  color: #666666;
  font-size: 16px;
  line-height: 30px;
  font-weight: 400;
  padding: 15px 20px;
}
.fs_afford_df>h3 span {
  float: right;
  height: 30px;
  width: 30px;
  display: block;
  background: url(http://www.feisu.com/includes/templates/fiberstore/images/shopcart_delete.png) no-repeat 1px 3px;
  cursor: pointer;
}
.fs_afford_df>h3:after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  clear: both;
}
.fs_afford_df p {
  color: #666666;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  padding-top: 34px;
  padding-bottom: 24px;
}
.fs_afford_df_btn{
  text-align: center;
}
.fs_afford_df_btn a{
  display: inline-block;
  width: 130px;
  height: 38px;
  line-height: 36px;
  text-align: center;
  margin: 0 8px;
  border: 1px solid #dedede;
  border-radius: 3px;
  text-indent: 999px;
  overflow: hidden;
  vertical-align: middle;
  text-decoration: none;
  background: url(http://www.feisu.com/includes/templates/fiberstore/images/bank-logo.png) no-repeat center;
}
.fs_afford_df_btn a:hover,.fs_afford_df_btn a.active{
  border-color: #d63030;
}
.fs_afford_df_btn a.alipay{
  background-position: 25px -1649px;
}
.fs_afford_df_btn a.wepay{
  background-position: 13px -1757px;
}
.other-afford-button.complete{
  background: #999999;
  color: #FFFFFF;
}
</style>
