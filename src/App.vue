<template>
  <div id="fiberstoreApplication">
    <div class="box">
      <Header v-bind:title = "PageTitle"></Header>
      <transition name="fade">
        <router-view/>
      </transition>
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
/* @import '../static/public.css';
@import '../static/fs_allCss.css';
@import '../static/index.css';
@import '../static/top_bottom.css';
@import '../static/media.css';
@import '../static/backstage.css'; */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
