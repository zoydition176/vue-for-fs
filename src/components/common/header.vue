<template>
  <!-- 公共头部组件 -->
  <div class="FiberStore_cs_new_header">
    <router-link to="/" class='FiberStore_login_logo'></router-link>
    <span class="FiberStore_login_logo_1ine"></span>
    <p>{{title}}</p>
  </div>
</template>
<script>
export default {
  name: 'fsheader',
  data () {
    return {
      msg: '页面名称'
    }
  },
  props: {
    title: String
  }
}
</script>
<style>
/*购物流程页面底部头部样式*/
.FiberStore_cs_new_header {
  width: 1200px;
  padding: 20px 0 22px;
  margin: 0 auto;
}

.FiberStore_cs_new_header:after {
  clear: both;
  display: block;
  width: 0;
  height: 0;
  content: '';
}

.FiberStore_login_logo {
  float: left;
  width: 138px;
  height: 40px;
  background: url(../../../static/images/header_LOGO.svg) no-repeat;
}

.FiberStore_login_logo_1ine {
  float: left;
  width: 1px;
  height: 17px;
  background-color: #999;
  margin: 12px 22px 0;
}

.FiberStore_cs_new_header p {
  float: left;
  font-size: 20px;
  color: #999;
  line-height: 40px;
}

/*0705登陆页底部改动*/

.fs-footer-list {
  text-align: center;
  padding-top: 50px;
}

.fs-footer-list a {
  display: inline-block;
  padding: 0 12px 0 10px;
  line-height: 14px;
  font-size: 14px;
  color: #666;
  border-right: 1px solid #999;
}

.fs-footer-list a:hover {
  text-decoration: underline;
}

.fs-footer-list a:last-child {
  border-right: none;
}

.fs-footer-txt {
  color: #999999;
  text-align: center;
  padding-top: 15px;
  font-size: 14px;
}

/*0705登陆页底部改动结束*/

.FiberStore_cs_new_footer {
  width: 1200px;
  margin: 0 auto 25px auto;
}

.FiberStore_cs_new_footer>p {
  float: left;
  font-size: 14px;
  padding-top: 22px;
  color: #999;
}

.FiberStore_cs_new_footer:after {
  clear: both;
  display: block;
  width: 0;
  height: 0;
  content: '';
}

.FiberStore_cs_new_footer_icon {
  float: right;
  padding-top: 10px;
}

.FiberStore_cs_new_footer_icon>a {
  float: right;
  width: 80px;
  height: 40px;
  background: url(../../../static/images/customer_service_icon.png) no-repeat;
  margin-right: 26px;
}

.FiberStore_cs_new_footer_icon>a:nth-of-type(1) {
  background-position: -61px -222px;
}

.FiberStore_cs_new_footer_icon>a:nth-of-type(2) {
  background-position: -61px -126px;
}

.FiberStore_cs_new_footer_icon>a:nth-of-type(3) {
  background-position: -61px -28px;
}

.FiberStore_cs_new_footer_icon div {
  /*width:300px;*/
  float: right;
  margin: 0 auto;
  display: inline-block;
}

.FiberStore_cs_new_footer_icon div a {
  display: inline-block;
  text-decoration: none;
  height: 40px;
  line-height: 40px;
}

.FiberStore_cs_new_footer_icon div a img {
  float: left;
  margin-top: 10px
}

.FiberStore_cs_new_footer_icon div a p {
  float: left;
  height: 40px;
  line-height: 40px;
  margin: 0px 0px 0px 5px;
  color: #939393;
}
/*购物流程页面底部头部样式结束*/
</style>
