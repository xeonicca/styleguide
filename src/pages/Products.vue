<template>
  <div>
    <article class="rt-product" v-for="product in productList">
      <figure class="rt-product-image">
        <img src="http://via.placeholder.com/240/cdd3d8" alt="">
        <aside class="rt-product-tag">85折</aside>
      </figure>
      <div class="rt-product-body">
        <figcaption class="rt-product-name">{{ product.name }}</figcaption>
        <figcaption class="rt-product-desc"><strong class="rt-text-discount">1500</strong>&nbsp;&nbsp;<strong class="rt-text-price">{{ product.price }}</strong></figcaption>
        <div class="rt-product-desc"><span class="rt-label rt-label-success">全站活動</span><span class="rt-label rt-label-important">運費活動</span><span class="rt-label rt-label-secondary">折扣碼</span></div>
      </div>

    </article>
<!--     <div class="rt-columns rt-columns-gapless">
      <div class="rt-column rt-column-6" v-for="product in productList">
        <div class="rt-product">
          <figure class="rt-product-image">
            <img src="http://via.placeholder.com/80/cdd3d8" alt="">
          </figure>
          <figcaption class="rt-product-name">{{ product.name }}</figcaption>
          <p class="rt-prduct-price"><span class="rt-text-price rt-text-price-1">{{ product.price }}</span></p>

        </div>
      </div>

      <div class="rt-column rt-column-6" v-for="product in productList">
        <div class="rt-product">
          <figure class="rt-product-image">
            <img src="http://via.placeholder.com/80/cdd3d8" alt="">
          </figure>
          <figcaption class="rt-product-name">{{ product.name }}</figcaption>
          <p class="rt-prduct-price"><span class="rt-text-price rt-text-price-2">{{ product.price }}</span></p>
        </div>
      </div>

      <div class="rt-column rt-column-6" v-for="product in productList">
        <div class="rt-product">
          <figure class="rt-product-image">
            <img src="http://via.placeholder.com/80/cdd3d8" alt="">
          </figure>
          <figcaption class="rt-product-name">{{ product.name }}</figcaption>
          <p class="rt-prduct-price"><span class="rt-text-price rt-text-price-3">{{ product.price }}</span></p>
        </div>
      </div>

      <div class="rt-column rt-column-6" v-for="product in productList">
        <div class="rt-product">
          <figure class="rt-product-image">
            <img src="http://via.placeholder.com/80/cdd3d8" alt="">
          </figure>
          <figcaption class="rt-product-name">{{ product.name }}</figcaption>
          <p class="rt-prduct-price"><span class="rt-text-price rt-text-price-4">{{ product.price }}</span></p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'products',
  data() {
    return {
      productList: [
        {
          name: '24H閃電出貨超商~小米行動電源 10000mAh送果凍保護套六色任選',
          price: 1299
        },
        {
          name: '24H閃電出貨超商~小米行動電源 10000mAh送果凍保護套六色任選',
          price: 1299
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import (reference) "../assets/less/m/v2/abstracts/variables.less";
.rt-column {
  &:nth-child(even) {
    .rt-product {
      border-right: 0;
    }
  }
}
// .rt-product {
//   padding: 15px 15px 10px;
//   border-top: 1px solid @default-border-bottom-color;
//   border-right: 1px solid @default-border-bottom-color;
// }
// .rt-product-image {
//   margin: 0;
//   text-align: center;
// }
// .rt-product-name {
//   display: -webkit-box;
//   -webkit-line-clamp: 2;
//   -webkit-box-orient: vertical;
//   font-size: 15px;
//   line-height: 1.3;
//   margin: 10px 0 5px;
//   letter-spacing: -0.2px;
//   // -webkit-line-clamp: 2;
//   overflow: hidden;
// }
.rt-prduct-price {
  // padding: 10px 0;
  text-align: center;
}
</style>