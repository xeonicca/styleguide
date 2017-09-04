<template>
  <div id="app">
    <header>
      <rt-header></rt-header>
    </header>
    <nav>
      <ul class="demo-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="register">Register</router-link></li>
        <!-- <li><router-link to="login">Login</router-link></li> -->
        <li><router-link to="credit">Credit</router-link></li>
        <!-- <li><router-link to="status">Status</router-link></li> -->
        <li><router-link to="products">Products</router-link></li>
        <li><router-link to="account">Account</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>

    <footer>

      <rt-footer></rt-footer>
    </footer>
    <rt-navbar></rt-navbar>
  </div>
</template>

<script>
import header from '@/components/Header'
import footer from '@/components/Footer'
import navbar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
    'rt-header': header,
    'rt-footer': footer,
    'rt-navbar': navbar
  }
}
</script>

<style lang="less">
@import 'assets/less/m/v2/style-base.less';

#app {
  height: 100%;
}

.demo-links {
  display: flex;
  margin: 0;
  padding: 15px 0;
  list-style: none;
  justify-content: center;
  font-size: 10px;

  > li + li {
    padding-left: 10px;

    &:before {
      content: '/';
      padding-right: 10px;
    }
  }
}
</style>
