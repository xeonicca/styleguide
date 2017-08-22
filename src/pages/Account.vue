<template>
  <main>
    <rt-tab></rt-tab>
    <div class="rt-section">
      <div class="rt-section-title user-avatar-wrap">
        <div class="user-avatar">
          <div class="user-avatar-content avatar-background avatar-theme-0"></div>
          <div class="user-avatar-content rti-account"></div>
        </div>
        <h2 class="user-nick">rutentest0016</h2>
      </div>
      <table>
        <tbody>
          <tr>
            <th class="account-title">身分證字號</th>
            <td>A12*******</td>
          </tr>
          <tr>
            <th class="account-title">手機</th>
            <td>0912****** <a style="float:right" href="#">手機驗證</a></td>
          </tr>
          <tr>
            <th class="account-title">電子信箱</th>
            <td>*****@gmail.com <a style="float:right" href="#">信箱驗證</a></td>
          </tr>
        </tbody>
      </table>
      <!-- <hr> -->
      <div class="rt-columns">
        <div class="rt-column">
          <a class="account-action account-action-password" href="#">
            <span class="account-action-text">修改密碼</span>
          </a>
        </div>
        <div class="rt-column">
          <a class="account-action account-action-mobile" href="#">
            <span class="account-action-text">修改手機號碼</span>
          </a>
        </div>
        <div class="rt-column">
          <a class="account-action account-action-email" href="#">
            <span class="account-action-text">修改電子信箱</span>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import tab from '@/components/Tab'
export default {
  name: 'account',
  components: {
    'rt-tab': tab,
  }
}
</script>

<style lang="less">
@import (reference) "../assets/less/m/v2/abstracts/variables.less";
@import (reference) "../assets/less/common-mixin.less";


.user-avatar-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.user-avatar-content {
  position: absolute;
  top: 0;
  left: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 30px;
  height: 30px;
  background-repeat: no-repeat;
  border-radius: 50%;
  text-align: center;
  color: rgba(255,255,255,.6);
}

.avatar-theme-0:before {
  background-image: linear-gradient(to bottom,#f6d365 0,#f6804a 100%);
}

.user-avatar-content:before {
  content: '';
  width: 100%;
  height: 100%;
  -webkit-clip-path: circle(48% at 50% 50%);
  clip-path: circle(48% at 50% 50%);
}

.rti-account {
  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22rgba%280,%200,%200,%200.6%29%22%20d%3D%22M12%200c-6.627%200-12%205.373-12%2012s5.373%2012%2012%2012%2012-5.373%2012-12-5.373-12-12-12zm7.753%2018.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945%203.145-5.942.833-9.119-2.489-9.119-3.388%200-5.644%203.299-2.489%209.119%201.066%201.964-1.148%202.427-3.393%202.945-1.084.25-1.608.658-1.867%201.246-1.405-1.723-2.251-3.919-2.251-6.31%200-5.514%204.486-10%2010-10s10%204.486%2010%2010c0%202.389-.845%204.583-2.247%206.305z%22%2F%3E%3C%2Fsvg%3E);
  background-size: 30px 30px;
}

.user-avatar {
  position: relative;
  width: 30px;
  height: 30px;
}

.user-nick {
  display: inline-block;
  margin-left: 10px;
  color: #49454a;
  font-size: @medium-fontsize;
}

.user-nick, .user-stats-label {
  font-weight: 400;
  vertical-align: middle;
}

//---

.account-title {
  text-align: right;
  width: 40%;
}

.account-action {
  display: block;
  position: relative;
  padding-bottom: 100%;
  border: 1px solid @component-border-color;
  border-radius: @component-border-radius;
  background-position: center 30%;
  box-shadow: @component-backdrop-shadow;
}

.account-action-password {
  .icon-background-generator(key, @default-font-compliment-color, 40, 40);
}

.account-action-mobile {
  .icon-background-generator(iphone, @default-font-compliment-color, 35, 35);
}

.account-action-email {
  .icon-background-generator(email, @default-font-compliment-color, 35, 35);
}

.account-action-text {
  position: absolute;
  bottom: 15%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: @small-fontsize;
  color: @default-font-compliment-color;
}
</style>