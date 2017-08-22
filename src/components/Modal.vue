<template>
  <div class="rt-modal">
    <div class="rt-modal-container">
      <div class="rt-modal-header">
        <h4>註冊成功</h4>
        <a href="#" class="rt-modal-close" @click="closeModal">&times;</a>
      </div>
      <div class="rt-modal-body">
        <p>聰明的人用腦袋講話，你應該做的不是去挑戰它，加油吧！</p>
      </div>
      <div class="rt-modal-footer">
        <div class="rt-columns">
          <div class="rt-column rt-column-6"><button class="rt-button rt-button-block rt-button-default" @click="closeModal">關閉</button></div>
          <div class="rt-column rt-column-6"><button class="rt-button rt-button-block rt-button-primary" @click="closeModal">確定</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import tab from '@/components/Tab'
export default {
  name: 'modal',
  methods: {
    closeModal() {
      this.$el.classList.remove('rt-modal-show')
    }
  }
}
</script>