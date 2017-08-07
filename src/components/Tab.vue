<template>
  <div class="rt-tab">
    <a class="rt-tab-item rt-tab-item-active">已結帳</a>
    <a class="rt-tab-item">待結帳</a>
    <router-link class="rt-tab-item" to="/multipane">測試頁</router-link>
  </div>
</template>


<script>
export default {
  name: 'tab'
}
</script>