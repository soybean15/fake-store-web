<template>
  <div v-if="loading">
    <LoadingView />
  </div>
  <div class="p-5 md-p-10" v-else>
    <div class="flex items-center">
      <span class="font-bold">Categories: </span>
      <ul v-for="category in categories">
        <li>  
          <button @click="onClickCategory(category)" :class="{'text-primary':activeCategory===category}" class="btn btn-ghost" >{{category}}</button></li>
 
      </ul>
    </div>
    <div class="grid gap-4 grid-cols-1 md:grid-cols-3"> 
      <div v-for="product in products " :key="product.id">
        <product-card :product="product"/>
      </div>

    </div>

  </div>
</template>

<script>
import { useProductStore } from '@/store/product'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

import LoadingView from '@/components/LoadingView.vue'
import ProductCard from './components/ProductCard.vue'
export default {
  components:{LoadingView,ProductCard},
    setup(){

    const productStore = useProductStore()
    const { products,loading,categories} =storeToRefs(productStore)

    const activeCategory = ref(null)
    onMounted(()=>{
      productStore.getProducts()
    })

    return {
      products,
      activeCategory,
      loading,
      categories,
      onClickCategory:(category)=>{
        productStore.getProductsByCategory(category)
        activeCategory.value = category

      }
    }
    }

}
</script>

<style>

</style>