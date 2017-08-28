<template>
  <div class="rt-search">
    <div class="rt-search-header">
      <a class="rt-search-prev" href="#"></a>
      <form id="srch" class="rt-header-form nav-search-form" action="" method="get" data-module="rtm-search">
        <input type="hidden" name="searchfrom" value="indexbar">
        <div class="header-search-wrap nav-search-input">
          <input id="keyword" class="header-search-input" name="k" type="search" placeholder="找商品" value="" size="1" />
          <!-- <a href="#" class="header-search-clear rti-remove-defaultGrey" data-type="clear-key"><b>&times;</b></a> -->
        </div>
        <button class="header-search-button header-full-search-button" type="submit" data-type="search-all">
        </button>

      </form>
    </div>
    <div class="rt-search-body">
      <div class="rt-section">
        <h4 class="rt-section-title">歷史搜尋</h4>
        <div class="rt-section-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi a voluptas impedit, mollitia reprehenderit recusandae velit fuga officia atque possimus doloribus quod in officiis ipsa laborum est aliquam nostrum!
        </div>
      </div>
      <hr>
      <div class="rt-section">
        <h4 class="rt-section-title">熱門搜尋</h4>
        <div class="rt-section-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio eligendi a voluptas impedit, mollitia reprehenderit recusandae velit fuga officia atque possimus doloribus quod in officiis ipsa laborum est aliquam nostrum!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rt-search',
}
</script>