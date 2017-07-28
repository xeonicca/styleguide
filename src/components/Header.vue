<template>

<div id="top" class="hd" data-module="rtm-header">
  <h1 class="rt-seo">露天拍賣 | 買家找優惠、優質商品，賣家賣商品就上台灣NO.1的露天拍賣</h1>
  <div class="rt-header nav">
    <div class="rt-header-backhistory nav-btn" data-type="back-btn">
      <div class="rti rti-chevron-left-decoWhite  rti-chevron-left-white"></div>
    </div>
    <div class="rt-header-brand nav-brand" alt="Ruten logo">
      <a class="rt-logo nav-brand-logo" href="#" data-type="go-to-index"></a>
    </div>
    <form id="srch" class="rt-header-form nav-search-form" action="" method="get" data-module="rtm-search">
      <input type="hidden" name="searchfrom" value="indexbar">
      <div class="header-search-input-wrap nav-search-input">
        <input id="keyword" class="header-search-input" name="k" type="search" placeholder="找商品" value="" size="1" />
        <a href="#" class="header-search-clear rti rti-remove rti-remove-defaultGrey" data-type="clear-key"></a>
      </div>

      <button class="header-search-button header-full-search-button nav-search-button nav-search-button-narrow js-all-key-search rti rti-search-decoWhite" type="submit" data-type="search-all">
      </button>
    </form>
  </div>
  <nav class="category-menu">
    <ul class="rt-nav">
      <li class="rt-nav-item category-icon">
        <a id="topmenu_category" class="rt-nav-item-link" href="#" data-type="topmenu-item">
          <div class="rt-nav-icon rt-nav-icon-category img"></div>
          <div class="text">商品分類</div>
        </a>
      </li>
      <li class="rt-nav-item buylist-icon">
        <a id="topmenu_checkout_list" class="rt-nav-item-link" href="#" data-type="topmenu-item">
          <div class="rt-nav-icon rt-nav-icon-purchase img"></div>
          <div class="text">購買清單</div>
        </a>
      </li>
      <li class="rt-nav-item info-icon">
        <a id="topmenu_info_center" class="rt-nav-item-link" href="#" data-type="topmenu-item">
          <div class="rt-nav-icon rt-nav-icon-info img"><div id="im_notification" class="im-notification"></div></div>
          <div class="text">訊息中心</div>
        </a>
      </li>
      <li class="rt-nav-item shelve-icon">
        <a id="topmenu_shelve" class="rt-nav-item-link" href="#" data-type="topmenu-item">
          <div class="rt-nav-icon rt-nav-icon-selling img"></div>
          <div class="text">賣東西</div>
        </a>
      </li>
      <li class="rt-nav-item account-icon">
        <a id="topmenu_my_account" class="rt-nav-item-link" href="#" data-type="topmenu-item">
          <div class="rt-nav-icon rt-nav-icon-account img"></div>
          <div class="text">我的帳戶</div>
        </a>
      </li>
    </ul>
  </nav>
</div>

</template>

<script>
export default {
  name: 'rt-header'
}
</script>