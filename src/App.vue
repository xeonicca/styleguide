<template>
  <div id="app">
    <header>
      <rt-header></rt-header>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import header from '@/components/Header'

export default {
  name: 'app',
  components: {
    'rt-header': header
  }
}
</script>

<style lang="less">
@import 'assets/less/m/v2/style-base.less';
</style>
