<template>
<main>
  <div class="rt-section rt-section-alt">
    <section class="rt-card">
      <div class="rt-card-title">
        <h2>ac02的賣場</h2>
        <a class="rt-card-subtitle" href="#"><span class="vmiddle">進入賣場</span>&nbsp;<i class="rti rti-arrow-right-subtitle"></i></a>
      </div>
      <div class="rt-card-subtitle">
        <p>優良交易評價：<strong class="rt-text-success">7824</strong></p>
      </div>
      <div class="rt-card-body">
        <table>
          <thead>
            <tr>
              <th width="70"></th>
              <th>1週</th>
              <th>1月</th>
              <th>半年</th>
              <th>全部</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>優良評價</td>
              <td>50</td>
              <td>244</td>
              <td>1768</td>
              <td>7824</td>
            </tr>
            <tr>
              <td>普通評價</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>8</td>
            </tr>
            <tr>
              <td>差勁評價</td>
              <td>0</td>
              <td>0</td>
              <td>1</td>
              <td>3</td>
            </tr>
            <tr>
              <td>評價次數</td>
              <td>50</td>
              <td>244</td>
              <td>1769</td>
              <td>7835</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>平均出貨天數</td>
              <td width="40">--</td>
            </tr>
            <tr>
              <td>交關過會員數</td>
              <td>27</td>
            </tr>
            <tr>
              <td>被加入最愛賣家次數</td>
              <td>65</td>
            </tr>
            <tr>
              <td>近半年棄標次數</td>
              <td>2</td>
            </tr>
            <tr>
              <td>寄貨與收款交易未完成次數</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

  </div>

  <div class="rt-tab">
    <a class="rt-tab-item rt-tab-item-active">賣東西評論</a>
    <a class="rt-tab-item">買東西評論</a>
  </div>

  <section class="rt-section">
    <h2 class="rt-seo">賣東西評論</h2>
    <div class="comment" v-for="comment in comments">
      <div class="comment-icon">
        <span v-if="comment.rate === 'good'" class="rti rti-2x rti-joy-success"></span>
        <span v-if="comment.rate === 'bad'" class="rti rti-2x rti-mad-important"></span>
        <span v-if="comment.rate === 'soso'" class="rti rti-2x rti-meh-secondary"></span>
      </div>

      <div class="comment-body">
        <a class="comment-title" href="#">{{comment.gname}}</a>
        <p v-for="buyerComment in comment.comment" class="comment-body-text">{{buyerComment}}</p>

      </div>



      <div class="comment-subtitle">
        <div><b>{{comment.buyerId}}</b> ({{comment.buyerCredit}})</div>
        <div class="comment-date">{{comment.commentDate}}</div>
      </div>
    </div>

  </section>
</main>
</template>

<script>
// import tab from '@/components/Tab'
export default {
  name: 'credit',
  data() {
    return {
      comments: [
        {
          gname: '露營小站~【738005】PRIMUS CampFire不鏽鋼鍋',
          buyerId: 'ac09',
          buyerCredit: '456',
          rate: 'good',
          commentDate: '2017-05-09',
          comment: ['值得推薦的好賣家!!!']
        },
        {
          gname: '爆亮故障警示燈手電筒 終極版磁吸LED行動燈管',
          buyerId: 'ac11',
          buyerCredit: '236',
          rate: 'bad',
          commentDate: '2017-05-09',
          comment: ['快活的魂魄，啦啦啦...就算失望，我的加了紅蔥頭你靜靜忍著緊緊把昨天在拳心握著你靜靜，你卻佔據了每一條街皮膚像冰雪將融', '請他的交通大學資訊工程系朋友幫忙他', '我們有僑外及國內民間投資', '在三年多以前的那8年是事實啊！']
        },
        {
          gname: '正鴻機車行 機車小U方天戟 手機車架手機架 RACING S',
          buyerId: 'ac01',
          buyerCredit: '874',
          rate: 'soso',
          commentDate: '2017-05-09',
          comment: ['謝謝,交易愉快!!希望還有機會跟您買東西...']
        },
        {
          gname: '├登山樂┤CAMPLAND 火烽焚火台鑄鐵烤盤 #P086-ST390',
          buyerId: 'ac05',
          buyerCredit: '69',
          rate: 'good',
          commentDate: '2017-05-09',
          // comment: '值得推薦的好賣家!!!'
        }
      ]
    }
  },
  components: {
    // 'rt-tab': tab
  }
}
</script>

<style lang="less">
  @import '../assets/less/m/v2/style-class-credit.less';
</style>