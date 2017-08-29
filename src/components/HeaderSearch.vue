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
          <a href="#" class="header-search-clear" @click="keyword=''"></a>
        </div>
        <button class="header-search-button header-full-search-button" type="submit" data-type="search-all">
        </button>
      </form>
      <!-- <a class="rt-search-close" href="#" @click="closeSearch"></a> -->
    </div>
    <div class="rt-search-body">
      <transition-group name="suggest-list" tag="ul" class="search-suggest-list">
        <li class="search-suggest-item" v-for="suggestion in suggestions" :key="suggestion">{{suggestion}}</li>
      </transition-group>
      <div class="rt-section">
        <h4 class="rt-section-title">
          <span>歷史搜尋</span>
          <a class="search-history-clear" href="#">清除</a>
        </h4>
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
var mockData = [
  '世大運 票',
  '世大運 門票',
  '世大運 閉幕',
  '世大運 熊',
  '世大運 排球',
  '世大運 熊讚',
  '世大運 籃球',
  '世大運 棒'
]

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

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
      ],

      suggestions: []
    }
  },

  watch: {
    keyword(newValue) {
      if(newValue !== '') {
        var random = Math.floor(Math.random() * mockData.length)
        // this.suggestions = mockData
        // console.dir(mockData[getRandom(0, mockData.length)])
        this.suggestions.push(mockData[random])
      } else {
        this.suggestions = []
      }
    }
  }
}
</script>

<style>
  .rt-section-title {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }
</style>