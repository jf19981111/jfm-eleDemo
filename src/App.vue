<template>
  <div id="app">
    <router-view></router-view>
    <FooterBar :tabs="tabs"></FooterBar>
  </div>
</template>

<script>
import FooterBar from './components/FooterBar'
export default {
  name: 'app',
  data() {
    return {
      tabs: [
        { name: '首页', href: '/home', icon: 'icon-changyonglogo401'},
        { name: '发现', href: '/find', icon: 'icon-faxian'},
        { name: '订单', href: '/order', icon: 'icon-icon--copy'},
        { name: '我的', href: '/center', icon: 'icon-wode-copy'},
      ]
    }
  },
  components: {
    FooterBar,

  }
}
</script>

<style>
@import './static/css/reset.css';
@import './static/css/iconfont/iconfont.css';
</style>
