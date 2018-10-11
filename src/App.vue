<template>
  <div id="fiberstoreApplication">
    <Header v-bind:title = "PageTitle"></Header>
    <div class="box">
      <router-view v-on:changetit="onChangetit"/>
    </div>
    <test></test>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import test from '@/components/global/test'
import Footer from '@/components/common/footer'
export default {
  name: 'App',
  data () {
    return {
      PageTitle: {}
    }
  },
  components: {
    Header,
    test,
    Footer
  },
  methods: {
    onChangetit (pageInt) {
      this.PageTitle = pageInt
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0 auto;
  padding: 0;
  font-size: 12px;
  font-family: "Microsoft YaHei";
  color: #555;
  -webkit-text-size-adjust: none;
  background: #fff;
}

input,
textarea,
keygen,
select,
button {
  font-family: "Microsoft YaHei" !important;
}

a {
  color: #333;
  text-decoration: none;
  outline: 0;
}

a:hover {
  text-decoration: underline;
}

.red {
  color: #d63030;
}

h1,
h2,
h3,
p,
ul,
li,
dl,
dt,
dd,
input,
select,
form,
div {
  margin: 0;
  padding: 0;
  list-style: none;
}

select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: url(../static/images/bg2016.png) no-repeat right -470px #fff;
}

fieldset,
input[type="search"],
input[type="text"],
input[type="password"] {
  -webkit-appearance: none;
}

textarea,
input[type="button"],
input[type="submit"] {
  -webkit-appearance: none;
}

select::-ms-expand {
  display: none;
}

input::-webkit-input-safebox-button {
  -webkit-appearance: -webkit-input-safebox-button;
  display: none !important;
  vertical-align: top;
  align-self: flex-start;
  -webkit-user-modify: read-only;
  flex: 0 0 auto;
  margin: auto 0px;
}

.clear:after{
  content: '';
  display: block;
  clear: both;
  width: 0;
  height: 0;
}

.m_header {
  display: none;
}

.web_popup {
  position: fixed;
  width: 600px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
  left: 50%;
  top: 45%;
  margin-left: -300px;
  margin-top: -200px;
  z-index: 9999
}

img {
  border: 0;
  vertical-align: middle
}

textarea {
  margin: 0
}

.locked {
  overflow: hidden;
}

.aaa {
  float: left
}

.bbb {
  float: right
}

.ccc {
  clear: both;
  height: 0;
  _height: 1%;
  padding: 0;
  margin: 0;
  _zoom: 1;
  overflow: hidden;
  font-size: 1px
}
/* @import '../static/public.css';
@import '../static/fs_allCss.css';
@import '../static/index.css';
@import '../static/top_bottom.css';
@import '../static/media.css';
@import '../static/backstage.css'; */
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
