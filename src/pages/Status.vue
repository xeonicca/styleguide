<template>
  <div>
    <rt-alert type="important">
      <div slot="title">結帳失敗!</div>
      <p slot="body">實際使用油者負擔一半的漲幅，我們沒有理由對擁有384萬人口的台北縣不升格</p>
    </rt-alert>

    <rt-alert type="success">
      <div slot="title">結帳成功!</div>
      <p slot="body">架構了一個網站寫好原始碼之後過來打分數，看似完美</p>
    </rt-alert>

    <rt-alert type="info">
      <div slot="title">結帳成功!</div>
      <p slot="body">架構了一個網站寫好原始碼之後過來打分數，看似完美</p>
    </rt-alert>
  </div>
</template>

<script>
import alert from '@/components/Alert'
export default {
  name: 'status',
  components: {
    'rt-alert': alert
  }
}
</script>

<style>
  .rt-alert + .rt-alert {
    margin-top: 10px;
  }
</style>