<template>
  <div class="rt-pane" v-show="index === currentIndex">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: 'rt-pane',
  props: ['index', 'currentIndex'],
}
</script>

<style>
  .rt-pane {
    /*display: none;*/
  }
</style>