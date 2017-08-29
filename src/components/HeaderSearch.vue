<template>
  <div class="rt-search">
    <div class="rt-search-header">
      <a class="rt-search-prev" href="#" @click="closeSearch"></a>
      <form id="srch" class="rt-header-form nav-search-form" action="" method="get" data-module="rtm-search">
        <input type="hidden" name="searchfrom" value="indexbar">
        <div class="header-search-wrap nav-search-input">
          <select class="rt-search-select">
            <option value="g">商品</option>
            <option value="s">賣家</option>
          </select>
          <input id="keyword" class="header-search-input" name="k" type="search" placeholder="請輸入關鍵字" value="" size="1" v-model="keyword" />
          <a href="#" class="header-search-clear" data-type="clear-key"><b>&times;</b></a>
        </div>
        <button class="header-search-button header-full-search-button" type="submit" data-type="search-all">
        </button>
      </form>
      <!-- <a class="rt-search-close" href="#" @click="closeSearch"></a> -->
    </div>
    <div class="rt-search-body">
      <div class="rt-section">
        <h4 class="rt-section-title">歷史搜尋</h4>
        <div class="rt-section-body">
          <span v-for="word in historyKeywords" class="rt-search-keyword" @click="applyKeyword(word)">{{word}}</span>
        </div>
      </div>
      <hr>
      <div class="rt-section">
        <h4 class="rt-section-title">熱門搜尋</h4>
        <div class="rt-section-body">
          <span v-for="word in hotKeywords" class="rt-search-keyword" @click="applyKeyword(word)">{{word}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rt-search',
  methods: {
    closeSearch() {
      document.body.classList.remove('search-mode')
    },

    applyKeyword(word) {
      this.keyword = word
    }
  },
  props: ['searchKeyword'],
  data() {
    return {
      keyword: this.searchKeyword,
      historyKeywords: [
        '威力彩',
        '張小燕賣豐華',
        '王孫辭世',
        '鄒兆龍劈腿',
        '早鳥機票'
      ],

      hotKeywords: [
        '碎菜器',
        '冰爆包',
        '仿真抱枕',
        '迷你裙',
        '海賊王',
        '夏期補習'
      ]
    }
  }
}
</script>