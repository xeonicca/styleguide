<template>
  <div class="hello">
    <h1 class="rt-page-title">M版v2樣式調整</h1>
    <hr>
    <h2 class="rt-page-subtitle">按鈕</h2>
    <button class="rt-button">預設按鈕樣式</button>
    <button class="rt-button rt-button-primary">預設按鈕樣式</button>
    <button class="rt-button rt-button-secondary">預設按鈕樣式</button>
    <button class="rt-button rt-button-inverse">預設按鈕樣式</button>
    <button class="rt-button rt-button-danger">預設按鈕樣式</button>
    <button class="rt-button rt-button-success">預設按鈕樣式</button>
    
    <h2 class="rt-page-subtitle">表格</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dave Gamache</td>
          <td>26</td>
          <td>Male</td>
          <td>San Francisco</td>
        </tr>
        <tr>
          <td>Dwayne Johnson</td>
          <td>42</td>
          <td>Male</td>
          <td>Hayward</td>
        </tr>
      </tbody>
    </table>
    <h2 class="rt-page-subtitle">表單</h2>
    <form class="rt-form">
      <div class="rt-form-group">
        <label class="rt-form-label" for="realName">姓名</label>
        <input class="rt-form-input" type="text" placeholder="例: 陳大天" id="realName">
      </div>
      <div class="rt-form-group rt-form-group-error">
        <label class="rt-form-label" for="cellPhone">手機號碼</label>
        <div class="rt-form-text rt-form-text-error">手機格式不正確!</div>
        <input class="rt-form-input" type="text" placeholder="0912345678" id="cellPhone">
      </div>
      <div class="rt-form-group rt-form-group-success">
        <label class="rt-form-label" for="homePhone">住家電話</label>
        <input class="rt-form-input" type="text" placeholder="02-4567812" id="homePhone">
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
        <label class="rt-form-label" for="exampleMessage">Message</label>
        <textarea class="rt-form-input" placeholder="Hi Dave …" id="exampleMessage"></textarea>
        <label class="example-send-yourself-copy">
          <input type="checkbox">
          <span class="label-body">Send a copy to yourself</span>
        </label>
      </div>
      <div class="rt-form-group">
        <input class="rt-button rt-button-primary" type="submit" value="Submit">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'showcase'
}
</script>
