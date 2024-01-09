<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <listProduct />
      </div>
      <div class="col-md-6">
        <addProduct />
      </div>
    </div>
  </div>
</template>
<script>
import addProduct from './product/AddProduct.vue'
import listProduct from './product/ListProduct.vue'

export default {
  components: {
    addProduct,
    listProduct
  }
}
</script>
