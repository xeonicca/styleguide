<template>
  <div id="app">
    <header>
      <rt-header></rt-header>
    </header>
    <rt-breadcrumb></rt-breadcrumb>
<!--     <router-link to="/">Home</router-link>/
    <router-link to="register">Register page</router-link> -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import header from '@/components/Header'
import tab from '@/components/Tab'
import breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'app',
  components: {
    'rt-header': header,
    'rt-tab': tab,
    'rt-breadcrumb': breadcrumb
  }
}
</script>

<style lang="less">
@import 'assets/less/m/v2/style-base.less';
</style>
