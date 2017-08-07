<template>
  <div id="app">
    <header>
      <rt-header></rt-header>
    </header>
    <router-view></router-view>
    <footer>
      <rt-footer></rt-footer>
    </footer>
  </div>
</template>

<script>
import header from '@/components/Header'
import footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    'rt-header': header,
    'rt-footer': footer,
  }
}
</script>

<style lang="less">
@import 'assets/less/m/v2/style-base.less';

#app {
  height: 100%;
}
</style>
