<template>
<main class="rt-section">
  <h2 class="rt-section-title">註冊一般會員</h2>
  <hr>
  <div class="rt-form">
    <div class="rt-columns">
      <div class="rt-column rt-column-8">
        <div class="rt-form-group">
          <label class="rt-form-label" for="username">帳號*</label>
          <div class="rt-form-text rt-form-text-error">手機格式不正確!</div>
          <input class="rt-form-input" type="text" id="username">
          <p class="rt-form-text">4 ~ 24 字元</p>
        </div>
      </div>
      <div class="rt-column rt-column-4">
        <label class="rt-form-label rt-invisible">帳號*</label>
        <button class="rt-button rt-button-block">檢查重複</button>
      </div>
    </div>

    <div class="rt-form-group">
      <label class="rt-form-label" for="password">密碼*</label>
      <input class="rt-form-input" type="password" id="password">
      <p class="rt-form-text">6 ~ 15 字元，至少搭配 1 個英文字母</p>
    </div>
    <div class="rt-form-group">
      <label class="rt-form-label" for="passwordAgain">再次輸入密碼*</label>
      <input class="rt-form-input" type="password" id="passwordAgain">
    </div>
    <div class="rt-form-group">
      <label class="rt-form-label" for="rocId">身分證字號*</label>
      <input class="rt-form-input" type="text" id="rocId">
      <p class="rt-form-text">一個身分證可註冊 3 個帳號</p>
    </div>
    <div class="rt-form-group">
      <label class="rt-form-label" for="mobile">手機號碼*</label>
      <input class="rt-form-input" type="text" id="mobile">
      <p class="rt-form-text">此號碼將做為認證用，請正確填寫</p>
    </div>
    <div class="rt-form-group">
      <label class="rt-form-label" for="email">電子信箱*</label>
      <input class="rt-form-input" type="email" id="email">
    </div>
    <div class="rt-form-group">
      <label class="rt-form-label">
        <div for="tosAgree" generated="true" class="error rt-form-text rt-form-text-error" style="display: inline-block;">請同意條款</div>
        <input class="rt-form-input" type="checkbox" id="tosAgree">
        <label class="rt-form-crlabel rt-form-crlabel-start" for="tosAgree"><p class="tos-text">同意<a href="#">PChomePay支付連服務約定條款</a>並以露天會員資料註冊 PChomePay 支付連</p></label>
      </label>
    </div>
    <div class="rt-form-group">
      <input class="rt-button rt-button-block rt-button-primary" type="submit" value="確定資料無誤送出" @click="showModal">
    </div>
  </div>

  <rt-modal ref="testModal"></rt-modal>
</main>
</template>

<script>
import modal from '@/components/Modal'
export default {
  name: 'register',
  components: {
    'rt-modal': modal
  },
  methods: {
    showModal() {
      this.$refs['testModal'].$el.classList.add('rt-modal-show')
    }
  }
}
</script>

<style>
.tos-text {
  line-height: 1.4;
  letter-spacing: 0;
}
</style>