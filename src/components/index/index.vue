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
    </div>
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
