<template>
<div>
  <div class="rt-section">
    <h1 class="rt-section-title">M版v2樣式調整</h1>
    <hr>
    <h2 class="rt-section-subtitle">按鈕</h2>
    <button class="rt-button">預設按鈕樣式</button><br>
    <button class="rt-button rt-button-primary">預設按鈕樣式primary</button><br>
    <button class="rt-button rt-button-secondary">預設按鈕樣式secondary</button><br>
    <button class="rt-button rt-button-inverse">預設按鈕樣式inverse</button><br>
    <button class="rt-button rt-button-important">預設按鈕樣式important</button><br>
    <button class="rt-button rt-button-success">預設按鈕樣式success</button><br>

    <h2 class="rt-section-subtitle">按鈕disabled</h2>
    <input class="rt-button" type="button" disabled value="預設按鈕樣式"><br>
    <input class="rt-button rt-button-primary" type="button" disabled value="預設按鈕樣式primary"><br>
    <input class="rt-button rt-button-secondary" type="button" disabled value="預設按鈕樣式secondary"><br>
    <input class="rt-button rt-button-inverse" type="button" disabled value="預設按鈕樣式inverse"><br>
    <input class="rt-button rt-button-important" type="button" disabled value="預設按鈕樣式important"><br>
    <input class="rt-button rt-button-success" type="button" disabled value="預設按鈕樣式success"><br>

    <!-- <button class="rt-link">預設按鈕樣式</button><br>
    <button class="rt-link rt-link-primary">預設按鈕樣式primary</button><br>
    <button class="rt-link rt-link-secondary">預設按鈕樣式secondary</button><br>
    <button class="rt-link rt-link-inverse">預設按鈕樣式inverse</button><br>
    <button class="rt-link rt-link-important">預設按鈕樣式important</button><br>
    <button class="rt-link rt-link-success">預設按鈕樣式success</button><br> -->

    <!-- <button class="rt-button rt-button-hallow rt-button-primary">預設按鈕樣式primary</button><br>
    <button class="rt-button rt-button-hallow rt-button-secondary">預設按鈕樣式secondary</button><br>
    <button class="rt-button rt-button-hallow rt-button-inverse">預設按鈕樣式inverse</button><br>
    <button class="rt-button rt-button-hallow rt-button-important">預設按鈕樣式important</button><br>
    <button class="rt-button rt-button-hallow rt-button-success">預設按鈕樣式success</button><br> -->
    <hr>
    <div class="rt-columns">
      <div class="rt-column"><button class="rt-button rt-button-block">上一步</button></div>
      <div class="rt-column"><button class="rt-button rt-button-primary rt-button-block">送出</button></div>
    </div>


    <h2 class="rt-section-title">標籤</h2>
    <span class="rt-label">免運</span><span class="rt-label rt-label-important">已下架</span><span class="rt-label rt-label-secondary">庫存不足</span><span class="rt-label  rt-label-success">規格更新</span>
  </div>
  <div class="rt-section">
    <h2 class="rt-section-title">Table</h2>

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
          <td width="100">優良評價</td>
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
  <div class="rt-section">
    <h2 class="rt-section-title">表單</h2>
    <form class="rt-form">
      <div class="rt-form-group">
        <label class="rt-form-label" for="realName">姓名</label>
        <input class="rt-form-input" type="text" placeholder="例: 陳大天" id="realName">
      </div>
      <div class="rt-form-group rt-form-group-error">
        <label class="rt-form-label" for="cellPhone">手機號碼*</label>
        <div class="rt-form-text rt-form-text-error">手機格式不正確!</div>
        <input class="rt-form-input" type="text" placeholder="0912345678" id="cellPhone">
      </div>
      <div class="rt-form-group rt-form-group-success">
        <label class="rt-form-label" for="homePhone">住家電話<p class="rt-form-text">選填</p></label>
        <input class="rt-form-input" type="text" placeholder="02-4567812" id="homePhone">
      </div>
      <div class="rt-form-group">
        <label class="rt-form-label" for="officePhone">公司電話<p class="rt-form-text">選填</p></label>
        <input class="rt-form-input" type="text" placeholder="02-4567812" id="officePhone" disabled>
      </div>
      <div class="rt-form-group">
        <label class="rt-form-label" for="officePhone">商品狀態*</label>
        <div class="rt-form-options rt-columns">
          <input id="radio1" name="goodsStatus" class="rt-form-option-input" type="radio">
          <label class="rt-form-option rt-column-4" for="radio1">全新</label>

          <input id="radio2" name="goodsStatus" class="rt-form-option-input" type="radio">
          <label class="rt-form-option rt-column-4" for="radio2">二手</label>

          <input id="radio3" name="goodsStatus" class="rt-form-option-input" type="radio">
          <label class="rt-form-option rt-column-4" for="radio3">物品中描述</label>
        </div>
      </div>

      <div class="rt-form-group">
        <label class="rt-form-label">商品分類</label>
        <a href="#" class="rt-form-toggle">請選擇</a>
      </div>

      <!-- <div class="rt-form-group">
        <label class="rt-form-label" for="officePhone">商品數量</label>
        <a href="#" class="rt-form-toggle">請選擇</a>
      </div> -->

      <div class="rt-form-group">
        <label class="rt-form-label" for="exampleRecipientInput">Reason for contacting</label>
        <select class="rt-form-input" id="exampleRecipientInput">
          <option value="Option 1">Questions</option>
          <option value="Option 2">Admiration</option>
          <option value="Option 3">Can I get your number?</option>
        </select>
      </div>
      <div class="rt-form-group">
        <label class="rt-form-label" for="exampleMessage">給賣家的話</label>
        <textarea class="rt-form-input" placeholder="Hi Dave …" id="exampleMessage"></textarea>
      </div>
      <div class="rt-form-group">
        <input class="rt-form-input" type="checkbox" id="save-default">
        <label class="rt-form-crlabel" for="save-default"><div>儲存為預設範本</div></label>
        <input class="rt-form-input" type="checkbox" id="pig" disabled="disabled">
        <label class="rt-form-crlabel" for="pig"><div>你是豬嗎?</div></label>
      </div>
      <div class="rt-form-group">
        <input class="rt-form-input" type="radio" id="SEVEN" name="delivery">
        <label class="rt-form-crlabel" for="SEVEN">
          <div>
            <div>
              123
            </div>
            <div>
              456
            </div>
          </div>
        </label>
      </div>
      <div class="rt-form-group">
        <input class="rt-form-input" type="radio" id="CVS" name="delivery">
        <label class="rt-form-crlabel" for="CVS"><div>全家、OK、萊爾富取貨</div></label>
      </div>
      <div class="rt-form-group">
        <input class="rt-button rt-button-block rt-button-primary" type="submit" value="Submit">
      </div>
    </form>
  </div>
</div>
</template>

<script>
import tab from '@/components/Tab'
import breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'showcase',
  components: {
    'rt-tab': tab,
    'rt-breadcrumb': breadcrumb
  }
}
</script>

<style>
  br + .rt-button {
    margin-top: 5px;
  }
</style>
