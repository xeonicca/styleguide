<template>
  <div class="rt-columns rt-columns-gapless">
    <div class="rt-column rt-column-6" v-for="product in productList">
      <div class="rt-product">
        <figure class="rt-product-image">
          <img src="http://via.placeholder.com/100/cdd3d8" alt="">
        </figure>
        <p class="rt-prduct-price"><strong class="rt-text-price rt-text-price-1">{{ product.price }}</strong></p>
        <figcaption class="rt-product-name">{{ product.name }}</figcaption>
      </div>
    </div>

    <div class="rt-column rt-column-6" v-for="product in productList">
      <div class="rt-product">
        <figure class="rt-product-image">
          <img src="http://via.placeholder.com/100/cdd3d8" alt="">
        </figure>
        <p class="rt-prduct-price"><strong class="rt-text-price rt-text-price-2">{{ product.price }}</strong></p>
        <figcaption class="rt-product-name">{{ product.name }}</figcaption>
      </div>
    </div>

    <div class="rt-column rt-column-6" v-for="product in productList">
      <div class="rt-product">
        <figure class="rt-product-image">
          <img src="http://via.placeholder.com/100/cdd3d8" alt="">
        </figure>
        <p class="rt-prduct-price"><strong class="rt-text-price rt-text-price-3">{{ product.price }}</strong></p>
        <figcaption class="rt-product-name">{{ product.name }}</figcaption>
      </div>
    </div>

    <div class="rt-column rt-column-6" v-for="product in productList">
      <div class="rt-product">
        <figure class="rt-product-image">
          <img src="http://via.placeholder.com/100/cdd3d8" alt="">
        </figure>
        <p class="rt-prduct-price"><strong class="rt-text-price rt-text-price-4">{{ product.price }}</strong></p>
        <figcaption class="rt-product-name">{{ product.name }}</figcaption>
      </div>
    </div>
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
.rt-column {
  &:nth-child(even) {
    .rt-product {
      border-right: 0;
    }
  }
}
.rt-product {
  padding: 15px 15px 10px;
  border-top: 1px solid #cdd3d8;
  border-right: 1px solid #cdd3d8;
}
.rt-product-image {
  margin: 0;
  text-align: center;
}
.rt-product-name {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 
  font-size: 15px;
  line-height: 1.3;
  letter-spacing: -0.2px;
  // -webkit-line-clamp: 2;
  overflow: hidden;
}
.rt-prduct-price {
  padding: 10px 0;
  text-align: center;
}
</style>