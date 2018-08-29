<template>
  <div id="fiberstoreApplication">
    <div class="box">
      <Header v-bind:title = "PageTitle"></Header>
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
export default {
  name: 'App',
  data () {
    return {
      PageTitle: '页面名称'
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
