<template>
  <div id="app">
    <header>
      <rt-header></rt-header>
    </header>
<<<<<<< HEAD
    <router-view></router-view>
    <footer>
      <rt-footer></rt-footer>
    </footer>
=======
    <rt-breadcrumb></rt-breadcrumb>
<!--     <router-link to="/">Home</router-link>/
    <router-link to="register">Register page</router-link> -->
    <main>
      <router-view></router-view>
    </main>
>>>>>>> ad8b4e6d266d5483276b4e55ce0c70f28e2ab242
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
