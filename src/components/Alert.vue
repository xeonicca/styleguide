<template>
  <aside class="rt-alert" :class="modifier">
    <div class="rt-alert-title"><slot name="title"></slot></div>
    <div class="rt-alert-body"><slot name="body"></slot></div>
  </aside>
</template>

<script>
export default {
  props: ['type'],
  computed: {
    modifier() {
      return `rt-alert-${this.type}`
    }
  }
}
</script>