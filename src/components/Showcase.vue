<template>
  <div class="rt-page">
    <h1 class="rt-page-title">M版v2樣式調整</h1>
    <hr>
    <h2 class="rt-page-subtitle">按鈕</h2>
    <button class="rt-button">預設按鈕樣式</button><br>
    <button class="rt-button rt-button-primary">預設按鈕樣式primary</button><br>
    <button class="rt-button rt-button-secondary">預設按鈕樣式secondary</button><br>
    <button class="rt-button rt-button-inverse">預設按鈕樣式inverse</button><br>
    <button class="rt-button rt-button-important">預設按鈕樣式important</button><br>
    <button class="rt-button rt-button-success">預設按鈕樣式success</button><br>
    <hr>
    <div class="rt-columns">
      <div class="rt-column"><button class="rt-button rt-button-block">上一步</button></div>
      <div class="rt-column"><button class="rt-button rt-button-primary rt-button-block">送出</button></div>
    </div>

    <h2 class="rt-page-subtitle">標籤</h2>
    <span class="label"></span>

    <section class="rt-card">
      <div class="rt-card-title">
        <h3>ac02的賣場</h3>
        <span class="rt-card-subtitle"><a class="rt-label rt-label-inverse" href="#">進入賣場</a></span>
      </div>
      <div class="rt-card-body">
        <table>
          <thead>
            <tr>
              <th></th>
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
      </div>
    </section>

    <h2 class="rt-page-subtitle">表單</h2>
    <form class="rt-form">
      <div class="rt-form-group">
        <label class="rt-form-label" for="realName"><b>姓名</b></label>
        <input class="rt-form-input" type="text" placeholder="例: 陳大天" id="realName">
      </div>
      <div class="rt-form-group rt-form-group-error">
        <label class="rt-form-label" for="cellPhone"><b>手機號碼</b></label>
        <div class="rt-form-text rt-form-text-error">手機格式不正確!</div>
        <input class="rt-form-input" type="text" placeholder="0912345678" id="cellPhone">
      </div>
      <div class="rt-form-group rt-form-group-success">
        <label class="rt-form-label" for="homePhone"><b>住家電話</b></label>
        <input class="rt-form-input" type="text" placeholder="02-4567812" id="homePhone">
        <p class="rt-form-text">選填</p>
      </div>
      <div class="rt-form-group">
        <label class="rt-form-label" for="exampleRecipientInput">Reason for contacting</label>
        <select class="rt-form-input" id="exampleRecipientInput">
          <option value="Option 1">Questions</option>
          <option value="Option 2">Admiration</option>
          <option value="Option 3">Can I get your number?</option>
        </select>
      </div>
      <div class="rt-form-group">
        <label class="rt-form-label" for="exampleMessage"><b>給賣家的話</b></label>
        <textarea class="rt-form-input" placeholder="Hi Dave …" id="exampleMessage"></textarea>
        <label class="rt-form-label">
          <input class="rt-form-input" type="checkbox">
          <span class="rt-form-text">儲存為預設範本</span>
        </label>
      </div>
      <div class="rt-form-group">
        <input class="rt-button rt-button-block rt-button-primary" type="submit" value="Submit">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'showcase'
}
</script>

<style>
  br + .rt-button {
    margin-top: 5px;
  }
</style>
