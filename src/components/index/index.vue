<template>
  <div class="indexbox" id="indexContent">
    <div class="cn-box">
      <h3>
        首页板块
        <span v-html="routerName"></span>
      </h3>
      <ul class="cn-ul clear">
        <li class="cn-ul-list">测试验证函数</li>
        <li class="cn-ul-list">地址栏复用模块</li>
        <li class="cn-ul-list">专题页复用模块</li>
      </ul>
    </div>
    <Banner></Banner>
  </div>
</template>

<script>
// import $ from 'jquery'
// import {zbase} from '@/js/base.js'
export default {
  name: 'index',
  methods: {},
  computed: {
    routerName () {
      return this.$route.name
    }
  },
  created () {
    var name = this.$route.name
    this.$emit('changetit', {a: '首页', b: name})
  }
}
</script>

<style lang="less" scoped>
.indexbox{
  background: #f6f6f6;
}
.cn-box{
  width: 1200px;
  margin: 0 auto;
}
.cn-grid-1{
  width: 10%;
}
.cn-ul .cn-ul-list{
  float: left;
  font-size: 16px;
  text-align: center;
  width: 25%;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cn-box h3{
  font-size: 30px;
  font-weight: 400;
  text-align: center;
}
</style>
