<template>
  <transition
    enter-active-class="animated fadeIn"
  >
      <router-view></router-view>
  </transition>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@import './static/css/reset.css';
@import './static/css/iconfont/iconfont.css';
</style>
