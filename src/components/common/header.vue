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

</style>
