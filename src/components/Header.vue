<template>

<div id="top" class="hd" data-module="rtm-header">
  <h1 class="rt-seo">露天拍賣 | 買家找優惠、優質商品，賣家賣商品就上台灣NO.1的露天拍賣</h1>
  <div class="rt-header nav">
    <div class="rt-header-backhistory nav-btn" data-type="back-btn" style="display: none;">
      <div class="rti rti-chevron-left-decoWhite  rti-chevron-left-white"></div>
    </div>
    <div class="rt-header-brand nav-brand" alt="Ruten logo">
      <a class="rt-logo nav-brand-logo" href="#" data-type="go-to-index"></a>
    </div>
    <form id="srch" class="rt-header-form nav-search-form" action="" method="get" data-module="rtm-search">
      <input type="hidden" name="searchfrom" value="indexbar">
      <div class="header-search-wrap nav-search-input">
        <input id="keyword" class="header-search-input" name="k" type="search" placeholder="找商品" value="" size="1" />
        <!-- <a href="#" class="header-search-clear rti-remove-defaultGrey" data-type="clear-key"><b>&times;</b></a> -->
      </div>
      <div class="header-search-mask" @click="expandMask"></div>
      <!-- <button class="header-search-button header-full-search-button nav-search-button nav-search-button-narrow js-all-key-search rti rti-search-decoWhite" type="submit" data-type="search-all">
      </button> -->

    </form>
    <a class="rt-header-cart" href="#"><span class="rt-header-counter">99</span></a>
    <a class="rt-header-chat" href="#"></a>
  </div>
  <rt-search></rt-search>
</div>

</template>

<script>
import headerSearch from '@/components/HeaderSearch'
export default {
  name: 'rt-header',
  components: {
    'rt-search': headerSearch
  },
  methods: {
    expandMask() {
      // if(!this.$el.classList.contains('rt-header-searchmode')) {
      //   this.$el.classList.toggle('rt-header-searchmode')
      // }

      if(!document.body.classList.contains('search-mode')) {
        document.body.classList.toggle('search-mode')
      }
    }
  }
}
</script>