<template>
  <div class="rt-pane-container">
    <div class="rt-tab">
      <a class="rt-tab-item" :class="{'rt-tab-item-active': page === 0}" @click="page = 0">page 1</a>
      <a class="rt-tab-item" :class="{'rt-tab-item-active': page === 1}" @click="page = 1">page 2</a>
    </div>
    <transition-group name="pane"> 
      <rt-pane ref="pane1" :key="0" :index="0" :currentIndex="page">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quam!1</p>
      </rt-pane>
      <rt-pane ref="pane2" :key="0" :index="1" :currentIndex="page">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quam!2</p>
      </rt-pane>
    </transition-group>
  </div>
</template>


<script>
import pane from '@/components/Pane'
import tab from '@/components/Tab'

export default {
  name: 'multipane',
  components: {
    'rt-tab': tab,
    'rt-pane': pane
  },
  data() {
    return {
      page: 0,
    }
  },
  mounted() {
    var firstPane = Object.keys(this.$refs)[this.page]
    // console.dir(this.$refs[firstPane])
    this.$refs[firstPane].$el.style.display = 'block';
  },

  methods: {
    showNext() {
      // var thisPane = Object.keys(this.$refs)[index]
      // var nextPane = Object.keys(this.$refs)[index+1]
    }
  }
}
</script>

<style>
  .rt-pane-container {
    position: absolute;
    /*padding-top: 109px;*/
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    z-index: 1;
  }

</style>