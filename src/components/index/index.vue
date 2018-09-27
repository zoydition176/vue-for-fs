<template>
  <div class="indexbox" id="indexContent">
    <div class="cn-box">
      <h3>首页板块</h3>
      <ul class="cn-ul clear">
        <li class="cn-ul-list">123123</li>
        <li class="cn-ul-list">123123</li>
        <li class="cn-ul-list">123123</li>
        <li class="cn-ul-list">123123</li>
      </ul>
      <button v-on:click="mytest()">test</button>
      <button v-on:click="$emit('changetit', '首页')">emit tithe</button>
    </div>
  </div>
</template>

<script>
import {zbase} from '../../js/base.js'
export default {
  name: 'index',
  methods: {
    mytest () {
      console.log(zbase)
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
  font-size: 14px;
  text-align: center;
  width: 25%;
  height: 24px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
