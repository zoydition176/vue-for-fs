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
            <div class="login-tab-panel" v-if="login_method === 'normal'">
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
        <div @click="showrouter()">123</div>

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
// import $ from 'jquery'
// import {checkisEmail, checkisMobilemainland, checkisMobilehk, checkisInt, checkisName} from '../../js/common_reg.js'
import {checkisEmail, checkisMobilemainland} from '../../js/common_reg.js'
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
  computed: {
    username () {
      return this.$route.params
    }
  },
  methods: {
    showrouter () {
      console.log(this)
    },
    checklogin () {
      var name = this.login_name
      var password = this.password
      var box = []
      var access = true
      if (!checkisEmail(name) && !checkisMobilemainland(name)) {
        this.name_check.status = true
        this.name_check.text = '您的账户格式不正确'
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
  },
  created () {
    var name = this.$route.name
    this.$emit('changetit', {a: '登陆', b: name})
  }
}

</script>
<style lang="less" scoped>
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
.login_center {
  background: url(../../../static/images/login_banner_02_z2.jpg) no-repeat center 0px;
  background-color: #eaeff3;
}

.login_center:after {
  content: '';
  display: block;
  width: 0;
  height: 0;
  clear: both;
}

.login_bg {
  position: absolute;
  padding-top: 22px;
  width: 100%;
  height: 575px;
  background: url(../../../static/images/login_banner_02_z2.jpg) no-repeat;
  left: 0;
  z-index: -2;
}

.login_center_left {
  float: left;
  width: 476px;
  margin-left: 100px;
}

.login_center_left_main {
  padding: 197px 0 0 240px;
  width: 281px;
  text-align: center;
}

.login_center_left_main_tit {
  font-size: 26px;
  color: #5993ea;
}

.login_center_left_main_url {
  font-size: 16px;
  margin: 12px 0;
  color: #5993ea;
  /*font-size: 500;*/
  padding: 6px 0;
  border-top: 1px solid #5993ea;
  border-bottom: 1px solid #5993ea;
}

.login_center_left_main_introduce {
  font-size: 18px;
  color: #5993ea;
  font-weight: lighter;
  line-height: 24px;
}

.login_center_right {
  float: right;
  margin-right: 100px;
  padding: 40px 0;
}

.login_center_right_main_tit {
  font-size: 20px;
  color: #666666;
  font-weight: 400;
  padding-top: 30px;
  margin-bottom: 28px;
}

.login_center_right_main_password {
  overflow: hidden;
  margin-bottom: 24px;
  margin-top: 20px;
}

.login_center_right_main_password>.aaa {
  margin-top: 0;
}

.login_center_right_main_password input {
  margin-top: 4px;
  margin-right: 4px;
}

.login_center_right_main_password p {
  margin-right: 16px;
}

.login_center_right_main_password input {
  float: left;
}

.login_center_right_main_password p {
  float: left;
}

.login_center_right_main_password a {
  float: right;
  font-size: 13px;
  color: #999;
  text-decoration: none;
}

.login_center_right_main_password a:hover {
  color: #d63030;
}

.login-box {
  margin: 0 auto;
  width: 1200px;
}

.login-box:after {
  content: '';
  display: block;
  clear: both;
}

.login-box .login-tourist-btn {
  display: none;
}

.FiberStore_login_bg {
  position: absolute;
  /*padding-top: 22px;*/
  width: 100%;
  height: 582px;
  background: url(../../../static/images/login_banner_02_1.jpg) no-repeat center;
  left: 0;
  z-index: -2;
}

.register_main_register {
  display: block;
  width: 100%;
  height: 50px;
  background-color: #fff;
  color: #999;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  margin-top: 14px;
  text-decoration: none;
}

.register_main_register:hover {
  background-color: #e0e0e0;
}

.login_alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.login_center_right_main {
  background-color: #fff;
  padding: 0 32px;
  width: 336px;
  /*height: 500px;*/
  /*height: 520px;*/
  position: relative;
}

.login_center_right_main>span {
  height: 30px;
  width: 30px;
  display: block;
  position: absolute;
  top: 5px;
  right: 5px;
  background: url(../../../static/images/shopcart_delete.png) no-repeat -8px 3px;
  cursor: pointer;
}

.login_center_right_main>span:hover {
  background: url(../../../static/images/shopcart_delete.png) no-repeat -61px 3px;
}

.Fiber_fjc {
  /*min-height: 385px;*/
}

.Fiber_fjc li {
  position: relative;
}

.FiberStore_login_title {
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  padding-top: 30px;
  padding-bottom: 32px;
  color: rgb(85, 85, 85);
}

.register_main_form_input {
  width: 366px;
  height: 48px;
  border: 1px solid #dedede;
  font-size: 14px;
  box-sizing: border-box;
  /* color: rgb(153,153,153); */
  line-height: 48px;
  border-radius: 3px;
  text-indent: 15px;
  color: #666;
  /* transition: border .2s linear 0s, box-shadow .2s linear 0s; */
  margin-bottom: 24px;
}

.login_center_right_main .register_main_form_input {
  width: 100%;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
  box-shadow: 0 0 0px 1000px white inset;
}

.FiberStore_login_validate_alert {
  /* display: none; */
  color: #D63030;
  /* background: url(images/login_alert_icon.png) no-repeat 0px 5px; */
  background: url(../../../static/images/login_alert_icon.png) no-repeat 0px 5px;
  text-indent: 20px;
  height: 24px;
  line-height: 24px;
  position: absolute;
  bottom: 0px;
  left: 0;
  font-weight: 400;
}

.register_main_rightnow {
  width: 100%;
  height: 50px;
  background-color: #d63030;
  color: #fff;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #d63030;
  cursor: pointer;
  margin-top: 24px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-family: "Microsoft YaHei";
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
}

.register_main_rightnow.login_now {
  margin-top: 0px;
}

.tourist-regist-btn {
  width: 100%;
  height: 50px;
  background-color: transparent;
  color: #d63030;
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #d63030;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s ease;
  font-family: "Microsoft YaHei";
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
}

.FiberStore_login_reg_link {
  padding-top: 20px;
}

.FiberStore_login_reg_link_left {
  float: left;
  color: #999;
  font-size: 14px;
}

.FiberStore_login_reg_link_right {
  float: right;
  color: #999;
  font-size: 14px;
}

.FiberStore_login_reg_link:after {
  clear: both;
  display: block;
  width: 0;
  height: 0;
  content: '';
}

.login_center_right_other {
  text-align: center;
  margin-top: 60px;
  overflow: hidden;
}

.login_center_right_other span {
  float: left;
  width: 122px;
  height: 1px;
  background-color: #eee;
  margin-top: 10px;
}

.login_icon {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 34px;
}

.login_center_right_other a {
  display: inline-block;
  width: 33px;
  height: 33px;
  border-radius: 50px;
  text-align: center;
  background-color: #979797;
  position: relative;
  cursor: pointer;
  margin: 0 15px;
  /* margin-right: 38px; */
}

.login_center_right_other a em {
  position: absolute;
  width: 33px;
  height: 33px;
  left: 0;
}

.login_wx em {
  background: url(../../../static/images/register_icon_login.png);
  background-position-x: 0.5px;
  background-position-y: -96px;
}

.login_center_right_other a.login_wx {
  background: rgba(81, 194, 19, 0.4);
}

.login_center_right_other a.login_wx:hover {
  background: #51c213;
}

.login_zfb em {
  background: url(../../../static/images/register_icon_login.png);
  background-position-x: 163.5px;
  background-position-y: -63px;
}

.login_center_right_other a.login_zfb {
  background-color: rgba(0, 170, 238, 0.4);
}

.login_center_right_other a.login_zfb:hover {
  background-color: #0ae;
}

.login_qq em {
  background: url(../../../static/images/register_icon_login.png);
  background-position-x: 98.5px;
  background-position-y: 0px;
}

.login_center_right_other a.login_qq {
  background-color: rgba(2, 136, 209, 0.4);
}

.login_center_right_other a.login_qq:hover {
  background-color: #0288d1;
}

.login_wb em {
  background: url(../../../static/images/register_icon_login.png);
  background-position-x: 32px;
  background-position-y: -32px;
}

.login_center_right_other a.login_wb {
  background-color: rgba(211, 47, 47, 0.4);
}

.login_center_right_other a.login_wb:hover {
  background-color: #d32f2f;
}

.register_main_form_input:focus {
  border: 1px solid rgba(51, 51, 51, 0.5);
  /* box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px rgba(0, 0, 0, 0.2); */
  border-color: rgba(51, 51, 51, 0.5);
  outline: 0 none;
}

.register_main_rightnow:hover {
  background: #c61017;
}

.register_main_rightnow:focus {
  outline: none;
}

.FiberStore_login_reg_link_left:hover,
.FiberStore_login_reg_link_right:hover {
  color: #D63030;
}

.FS_login_window {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 999;
  display: none;
}

.login_alert_close {
  position: absolute;
  top: 12px;
  right: 12px;
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background: url(../../../static/images/shopcart_delete.png) no-repeat -13px -2px;
}

.login_alert_close:hover {
  background: url(../../../static/images/shopcart_delete.png) no-repeat -66px -2px;
}

.FiberStore_login_validate_alert_show {
  display: block;
  font-style: normal;
  font-size: 12px;
  font-weight: 400;
}

/*201803*/

.login-group {
  min-height: 324px;
}

.login-group li,
.login-row li {
  position: relative;
}

.login-group li:after {
  content: '';
  display: block;
  clear: both;
}

.login-group-head {
  text-align: center;
}

.login-group-head span {
  display: inline-block;
  padding: 0 15px;
  font-weight: 400;
  cursor: pointer;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 32px;
  color: rgb(85, 85, 85);
  position: relative;
}

.login-group-head span.active {
  color: #d63030;
}

.login-group-head em {
  display: inline-block;
  width: 1px;
  height: 18px;
  margin-bottom: -3px;
  background: #dedede;
}

.login-group-head span.active {
  color: #d63030;
}

.psw-eyes {
  display: block;
  position: absolute;
  top: 0;
  right: 5px;
  cursor: pointer;
  height: 48px;
  width: 30px;
  background: url(../../../static/images/111_03.png) no-repeat -24px 19px;
}

.login-row li .get-code {
  height: 30px;
  cursor: pointer;
  border: 0;
  width: 100px;
  border-left: 1px solid #e0e0e0;
  border-bottom-left-radius: 0;
  background: #fff;
  border-top-left-radius: 0;
  outline: none;
  color: #666;
  text-align: center;
  line-height: 30px;
  position: absolute;
  top: 9px;
  font-size: 14px;
  right: 1px;
}

.psw-eyes.active {
  background-position: 5px 19px;
}

.login-link {
  margin-bottom: 24px;
}

.login-link:after {
  content: '';
  display: block;
  clear: both;
}

.login-link .login-linkpanel {
  float: right;
  line-height: 18px;
  font-size: 13px;
  overflow: hidden;
  color: #666666;
}

.login-link .login-linkpanel a {
  padding: 0 12px;
  display: inline-block;
  line-height: 24px;
  float: left;
  color: #666666;
}

.login-link .login-linkpanel a:nth-of-type(2) {
  padding-right: 0;
  position: relative;
}

.login-link .login-linkpanel a:nth-of-type(2):before {
  content: '';
  display: block;
  position: absolute;
  top: 5px;
  left: -1px;
  width: 1px;
  height: 14px;
  background: #dedede;
}

.login-link a:hover {
  color: #D63030;
}

.login-link .login-check {
  float: left;
  font-size: 13px;
  line-height: 18px;
  cursor: pointer;
}

.login-check label {
  height: 18px;
  display: block;
  cursor: pointer;
}

.login-check label .checkbox-red {
  display: inline-block;
  box-sizing: border-box;
  height: 18px;
  width: 18px;
  vertical-align: top;
  margin-right: 2px;
  border: 1px solid #EEEEEE;
  border-radius: 3px;
  background: url(../../../static/images/red_no.png) no-repeat 0 -16px;
}

.login-check label .checkbox-red.active {
  border-color: #d63030;
  background: url(../../../static/images/red_no.png) no-repeat 0 0px;
}

.login-check input[type="checkbox"],
.login-check input[type="radio"] {
  opacity: 0;
}

.login-divide {
  overflow: hidden;
}

.login-divide p {
  position: relative;
  margin: 0 auto;
  line-height: 24px;
  color: #ccc;
  font-size: 14px;
}

.login-divide p:before {
  content: '';
  position: absolute;
  left: 0px;
  top: 12px;
  display: block;
  width: 120px;
  height: 1px;
  background: #eee;
}

.login-divide p:after {
  content: '';
  position: absolute;
  right: 0px;
  top: 12px;
  display: block;
  width: 120px;
  height: 1px;
  background: #eee;
}

.login-tab-panel {
  display: block;
}

.login-tab-panel.active {
  display: block;
}

.login-tourist-btn {
  display: none;
  margin-top: 15px;
  margin-bottom: -15px;
}

.login-tourist-btn.active {
  display: block;
}
</style>
